import jwt from 'jsonwebtoken';
import User from 'models/user/user';
import {
  ApiServerError,
  ApiUnauthorizedError,
} from 'modules/apiError';
import UserManager from 'modules/userManager';

const EXPIRATION_TIME = '1y';

class UserCreateSessionContext {
  static async call(givenParams) {
    let user;

    if (!givenParams.email || !givenParams.password) {
      throw new ApiUnauthorizedError();
    }
    try {
      user = await UserManager.findByEmail(givenParams.email);
    } catch (err) {
      throw new ApiUnauthorizedError();
    }
    if (user.password != givenParams.password) {
      throw new ApiUnauthorizedError();
    }
    return this.createSession(user);
  }

  static async createSession(user, deviceName) {
    const token = jwt.sign(
      { userId: user._id },
      global.env.key.jwtSecret,
      { algorithm: 'HS256', expiresIn: EXPIRATION_TIME, }
    );

    let session = {
      token,
    };
    if (deviceName) {
      session.deviceName = deviceName;
    }
    if (user.sessions instanceof Array) {
      user.sessions.push(session);
    } else {
      user.sessions = [session];
    }

    try {
      await user.save();
    } catch (e) {
      throw new ApiServerError();
    }
    return user;
  }
}

export default UserCreateSessionContext;
