import { Request, Response } from "express";
import { sign } from "common/jwt";
import { IAuthResonseError, IAuthResponseSucess } from "common/httpResponse";
export const register = (req: Request, res: Response) => {
  res.send(
    `Register complete with
    ${typeof req.body === "object" && JSON.stringify(req.body)}`
  );
};

export const login = (req: Request, res: Response) => {
  const login: string = req.body.login;
  const password: string = req.body.password;
  let response: IAuthResponseSucess | IAuthResonseError = {
    error: true,
    message: "Invalid strings",
  };
  if (login !== "admin" && password !== "admin") {
    res.status(403);
    return res.send(response);
  }
  const accessToken = sign({
    id: "1",
    login,
    type: "access",
  });
  const refreshToken = sign({
    id: "1",
    login,
    type: "refresh",
  });
  response = {
    error: false,
    data: {
      tokens: {
        accessToken,
        refreshToken,
      },
    },
  };
  return res.send(response);
};
