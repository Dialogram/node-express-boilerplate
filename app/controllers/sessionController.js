import UserCreateSessionContext from 'contexts/sessions/userCreateSessionContext';

import SessionSerializer from 'serializers/users/sessionSerializer';

class SessionController {

  static async create(req, res, next) {
    let user;
    try {
      user = await UserCreateSessionContext.call(req.body);
    } catch (err) {
      return next(err);
    }
    return res.json(SessionSerializer({ user }));
  }
}

export default SessionController
