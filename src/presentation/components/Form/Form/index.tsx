import { FC } from "react";

import { FormProps } from "./types";

export const Form: FC<FormProps> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};
