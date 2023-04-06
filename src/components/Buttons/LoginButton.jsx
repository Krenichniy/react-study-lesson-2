import { Button } from "./Button";
export const LoginButton = ({callback, children}) => {
  // Уникальная логика кнопки логина
  return <Button variant="primary" onClick={callback}>{ children}</Button>;
};