import jwt from "jsonwebtoken";
export interface ISignProps {
  login: string;
  id: string;
  type: "refresh" | "access";
}
const secretCode = "asdasdjkhk12n3k3j2n4kcj2k3";
export const sign = (payload: ISignProps): string => {
  const token = jwt.sign(
    {
      login: payload.login,
      id: payload.id,
      type: payload.type,
    },
    secretCode
  );
  return token;
};
