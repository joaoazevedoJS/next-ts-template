import { FC } from "react";

import { ErrorMessage, Field } from "formik";

import { InputProps } from "./types";

export const FormInput: FC<InputProps> = ({ name, ...props }) => {
  return (
    <>
      <Field {...props} name={name} />

      <ErrorMessage name={name} />
    </>
  );
};
