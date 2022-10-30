import * as yup from "yup";

import { IFormValues } from "../types";

export const InitialValues = (): IFormValues => ({
  name: "",
  password: "",
});

export const ValidationSchema = yup.object().shape({
  name: yup.string().trim().required(),
  password: yup.string().min(7).required(),
});
