import UserCreateUserContext from 'contexts/users/userCreateUserContext';
import UserCreateSessionContext from 'contexts/sessions/userCreateSessionContext';

import SessionSerializer from 'serializers/users/sessionSerializer';
import UserSerializer from 'serializers/users/userSerializer';

class UserController {

  static async create(req, res, next) {
    let user;
    try {
      user = await UserCreateUserContext.call(req.body);
      await UserCreateSessionContext.createSession(user);
    } catch (err) {
      return next(err);
    }
    return res.json(SessionSerializer({ user }));
  }

  static async me(req, res, next) {
    res.json(UserSerializer(req.user));
  }
}

export default UserController
