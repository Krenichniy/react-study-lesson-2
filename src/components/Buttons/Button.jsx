import clsx from "clsx";
export const Button = ({ variant,callback, children }) => {
  return <button className={clsx("button", variant)} onClick={callback}>{children}</button>;
};