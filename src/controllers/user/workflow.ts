import {
  SigInParams,
  LoginParams,
  UserModel,
  AuthToken,
  TypeErrors,
  ResponseRefreshToken,
} from '../../models';
import jwt from 'jsonwebtoken';
import {v4 as uuid} from 'uuid';

const key = process.env.SECRET_KEY ? process.env.SECRET_KEY : '';

const validRefresh = {};

export const logIn = async ({
  email,
  password,
}: LoginParams): Promise<AuthToken> => {
  const result = await UserModel.findOne({
    email,
  });

  if (result == null) {
    throw new Error(TypeErrors.NotFound);
  }

  if (password !== result.password) {
    throw new Error(TypeErrors.Unauthorized);
  }

  const token = jwt.sign(
    {
      id: result.id,
      email,
    },
    key,
    {
      expiresIn: '1h',
    },
  );

  const refreshToken = uuid();

  validRefresh[refreshToken] = 3;

  return {
    id: result.id,
    refreshToken,
    token,
  };
};

export const refreshUser = ({
  refreshToken,
  lastToken,
}): ResponseRefreshToken => {
  if (validRefresh[refreshToken] <= 0) {
    throw Error(TypeErrors.Unauthorized);
  }

  validRefresh[refreshToken]--;

  const lastPayload = jwt.decode(lastToken);

  if (lastPayload === null) {
    throw Error(TypeErrors.BadRequest);
  }

  const newToken = jwt.sign(lastPayload, key, {
    expiresIn: '1h',
  });

  return {
    token: newToken,
  };
};

export const signIn = async ({
  email,
  password,
  address,
  lastName,
  name,
  phone,
  secondLastName,
}: SigInParams): Promise<String> => {
  const newUser = new UserModel({
    email,
    password,
    address,
    lastName,
    name,
    phone,
    secondLastName,
  });

  const response = await newUser.save();

  return response.id;
};
