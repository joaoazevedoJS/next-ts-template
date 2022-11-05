import * as yup from "yup";

import { IFormValues } from "../types";

export const InitialValues = (): IFormValues => ({
  email: "",
  password: "",
});

export const ValidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});
