import jwt from 'express-jwt';
import User from 'models/user/user';
import UserManager from 'modules/userManager';

import {
  ApiUnauthorizedError,
} from 'modules/apiError';

class ApiAuthentication {
  static validJwt() {
    const jwtValidation = jwt({
      secret: global.env.key.jwtSecret,
      requestProperty: 'jwtToken',
    });

    return jwtValidation;
  }

  static async retrieveUser(req, res, next) {
    let user = {};
    try {
      user = await UserManager.findById(req.jwtToken.userId);
    } catch (err) {
      return next(new ApiUnauthorizedError(err.message));
    }

    // TODO check if token in db correspond to the sent token
    req.user = user;
    next();
  }
}

export default ApiAuthentication;
