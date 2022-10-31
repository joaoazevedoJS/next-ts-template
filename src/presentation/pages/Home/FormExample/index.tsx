import { FC, useCallback, useMemo, useState } from "react";

import { useTranslation } from "next-i18next";

import { HttpProvider } from "@/providers/http";

import { InitialValues, ValidationSchema } from "./factory";

import { IFormValues } from "./types";

import { Form } from "./styles";

export const HomeFormExample: FC = () => {
  const { t: translation } = useTranslation("pages/home");

  const [inLoading, setInLoading] = useState(false);

  const initialValues = useMemo(() => InitialValues(), []);

  const handleLoading = useCallback((data: IFormValues) => {
    console.log(data);

    HttpProvider.post({
      url: "/posts",
      body: data,
    });

    setInLoading(true);

    setTimeout(() => setInLoading(false), 2000);
  }, []);

  return (
    <Form initialValues={initialValues} onSubmit={handleLoading} validationSchema={ValidationSchema}>
      <Form.Input type="text" name="name" />

      <Form.Input type="password" name="password" />

      <Form.Button type="submit" loading={inLoading}>
        {translation("form_submit")}
      </Form.Button>
    </Form>
  );
};
