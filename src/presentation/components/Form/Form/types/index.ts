import { FormikConfig } from "formik";

export type FormProps = FormikConfig<any> & {
  loading?: boolean;
  className?: string;
};
