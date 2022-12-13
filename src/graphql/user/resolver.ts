import {
  logIn as logInResolver,
  signIn as signInResolver,
  refreshUser as refreshTokenResolver,
} from '../../controllers/user';
import {
  SigInParams,
  LoginParams,
  AuthToken,
  ResponseRefreshToken,
  RefreshTokenParams,
} from '../../models';

module.exports = {
  logIn: async (params: LoginParams): Promise<AuthToken> => {
    return await logInResolver(params);
  },
  refreshToken: (params: RefreshTokenParams): ResponseRefreshToken => {
    return refreshTokenResolver(params);
  },
  signIn: async (params: SigInParams): Promise<String> => {
    return await signInResolver(params);
  },
};
