import { FC } from "react";

import { useTranslation } from "next-i18next";

import { ButtonProps } from "./types";

import { Button, ButtonLoading } from "./styles";

export const FormButton: FC<ButtonProps> = ({ children, loading, disabled, ...props }) => {
  const { t: translation } = useTranslation("components/form/button");

  return (
    <Button type="button" {...props} disabled={disabled || loading}>
      {children}

      {loading && <ButtonLoading>{translation("loading")}</ButtonLoading>}
    </Button>
  );
};
