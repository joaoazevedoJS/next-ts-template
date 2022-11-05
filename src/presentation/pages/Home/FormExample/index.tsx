import { FC, useCallback, useMemo, useState } from "react";

import { useTranslation } from "next-i18next";

import { Authentication } from "@/data";

import { InitialValues, ValidationSchema } from "./factory";

import { IFormValues } from "./types";

import { Form } from "./styles";

export const HomeFormExample: FC = () => {
  const { t: translation } = useTranslation("pages/home");

  const [inLoading, setInLoading] = useState(false);

  const initialValues = useMemo(() => InitialValues(), []);

  const handleLoading = useCallback(async (data: IFormValues) => {
    setInLoading(true);

    try {
      await Authentication.login(data);
    } catch (error) {
      console.error(error);
    } finally {
      setInLoading(false);
    }
  }, []);

  return (
    <Form initialValues={initialValues} onSubmit={handleLoading} validationSchema={ValidationSchema}>
      <Form.Input type="text" name="email" />

      <Form.Input type="password" name="password" />

      <Form.Button type="submit" loading={inLoading}>
        {translation("form_submit")}
      </Form.Button>
    </Form>
  );
};
