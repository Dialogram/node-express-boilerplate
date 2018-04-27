import User from 'models/user/user';
import { ApiServerError } from 'modules/apiError';

class UserCreateUserContext {
  static async call(givenParams) {
    const user = new User(givenParams);

    try {
      await user.save();
    } catch (err) {
      throw new ApiServerError(err.message);
    }
    return user;
  }
}

export default UserCreateUserContext;
