import { FC } from "react";

import { FormProps } from "@/presentation/components/Form/Form/types";
import { ButtonProps } from "@/presentation/components/Form/Button/types";

export type IForm = ReactDotNotation<
  FC<FormProps>,
  {
    Button: FC<ButtonProps>;
  }
>;
