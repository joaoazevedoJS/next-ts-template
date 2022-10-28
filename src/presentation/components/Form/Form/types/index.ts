import { ButtonHTMLAttributes } from "react";

export type FormProps = ButtonHTMLAttributes<HTMLFormElement> & {
  loading?: boolean;
};
