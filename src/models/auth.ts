export interface AuthToken {
  id: string;
  token: string;
  refreshToken: string;
}

export interface RefreshTokenParams {
  refreshToken: string;
  lastToken: string;
}

export interface ResponseRefreshToken {
  token: string;
}
