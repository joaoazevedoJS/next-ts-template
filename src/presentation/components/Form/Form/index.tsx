import { FC } from "react";

import { Form as FormikForm, Formik } from "formik";

import { FormProps } from "./types";

export const Form: FC<FormProps> = ({ children, className, ...props }) => (
  <Formik {...props}>
    <FormikForm className={className}>
      <>{children}</>
    </FormikForm>
  </Formik>
);
