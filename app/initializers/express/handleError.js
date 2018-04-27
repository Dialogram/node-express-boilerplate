import {
  ApiServerError,
  ApiUnauthorizedError,
} from 'modules/apiError';
import pe from 'initializers/prettyError';

class HandleError {
  static handleError(err, req, res, next) {

    if (global.env.__DEV__) {
      console.error(pe.render(err));
    }

    if (err instanceof ApiServerError) {
      return res.sendStatus(500);
    }
    if (err instanceof ApiUnauthorizedError || err.name === 'UnauthorizedError') {
      return res.sendStatus(401);
    }
    return res.status(500).send('Please contact an administrator at liroo.pierre@gmail.com.');
  }
}

export default HandleError;
