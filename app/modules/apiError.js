const errorCode = {
  // Server error
  'a000': 'An error occured on server side',

  // Unauthorized error
  'b000': 'Unauthorized user',
};

class ErrorReplica {
  constructor(message) {
    this.name = 'ErrorReplica';
    this.message = message;
    this.stack = new Error().stack;
  }
}
ErrorReplica.prototype = Object.create(Error.prototype);

class ApiError extends ErrorReplica {
  constructor (message, status) {
    super(message);

    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
};

class TemplateError extends ApiError {
  constructor(message) {
    super(message || 'This is a template error, please not use in any situation.');
    this.name = 'TemplateError';
  }
}

class ApiServerError extends ApiError {
  constructor(message) {
    super(message || errorCode['a000']);
    this.name = 'ApiServerError';
  }
}

class ApiUnauthorizedError extends ApiError {
  constructor(message) {
    super(message || errorCode['b000']);
    this.name = 'ApiUnauthorizedError';
  }
}

export default ApiError;
export {
  TemplateError,

  ApiServerError,
  ApiUnauthorizedError,
};
