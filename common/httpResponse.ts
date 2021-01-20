export interface IAuthResponseSucess {
  error: false;
  data: {
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
}
export interface IAuthResonseError {
  error: true;
  message: string;
}
