import { FC } from "react";

import { FormProps } from "@/presentation/components/Form/Form/types";
import { ButtonProps } from "@/presentation/components/Form/Button/types";
import { InputProps } from "@/presentation/components/Form/Input/types";

export type IForm = ReactDotNotation<
  FC<FormProps>,
  {
    Input: FC<InputProps>;
    Button: FC<ButtonProps>;
  }
>;
