import { FC } from "react";

import { useTranslation } from "next-i18next";

export const HomeHello: FC = () => {
  const { t: translation } = useTranslation("pages/home");

  return <h1>{translation("hello")}</h1>;
};
