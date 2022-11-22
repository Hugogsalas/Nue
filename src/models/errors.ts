export enum TypeErrors {
  BadRequest = 'BadRequest',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'NotFound',
  InternalServerError = 'InternalServerError',
}

export interface responseError {
  message: string;
  statusCode: number;
}

export type ErrorsAvailables = {
  [k in TypeErrors]: responseError;
};
