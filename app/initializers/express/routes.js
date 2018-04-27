import express from 'express';

import ApiAuthentication from 'middlewares/apiAuthentication';

import UserController from 'controllers/userController';
import SessionController from 'controllers/sessionController';

class Routes {
  constructor() {
    this.router = express.Router();
    this._setRoutes();
  }

  getRouter() {
    return this.router;
  }

  _setRoutes() {
    this.router.route('/users')
      .post(UserController.create)
      .get(ApiAuthentication.validJwt(), ApiAuthentication.retrieveUser, UserController.me);

    this.router.route('/sessions')
      .post(SessionController.create)
  }
}

export default Routes;
