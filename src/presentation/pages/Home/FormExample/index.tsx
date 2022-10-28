import { FC, useCallback, useState } from "react";

import { useTranslation } from "next-i18next";

import { Form } from "./styles";

export const HomeFormExample: FC = () => {
  const { t: translation } = useTranslation("pages/home");

  const [inLoading, setInLoading] = useState(false);

  const handleLoading = useCallback(() => {
    setInLoading(true);

    setTimeout(() => setInLoading(false), 2000);
  }, []);

  return (
    <Form>
      <input type="text" />

      <Form.Button loading={inLoading} onClick={handleLoading}>
        {translation("form_submit")}
      </Form.Button>
    </Form>
  );
};
