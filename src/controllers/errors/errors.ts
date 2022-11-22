import {ErrorsAvailables, responseError} from '../../models';

export const errors: ErrorsAvailables = {
  NotFound: {
    message: 'Not Found',
    statusCode: 400,
  },
  Unauthorized: {
    message: 'Unauthorized',
    statusCode: 401,
  },
  Forbidden: {
    message: 'Forbidden',
    statusCode: 403,
  },
  BadRequest: {
    message: 'Bad request',
    statusCode: 404,
  },
  InternalServerError: {
    message: 'Internal Server Error',
    statusCode: 500,
  },
};

export const errorManager = (error: Error): responseError => {
  console.error(error);
  const actualError = errors[error.message]
    ? errors[error.message]
    : errors.InternalServerError;
  return actualError;
};
