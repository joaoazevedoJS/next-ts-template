import { FC } from "react";

import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { formLocales } from "@/presentation/locales/components";
import { HomeContent } from "@/presentation/pages/Home";

const Home: FC = () => (
  <HomeContent>
    <HomeContent.Hello />

    <HomeContent.Form />
  </HomeContent>
);

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  const i18n = await serverSideTranslations(locale, ["pages/home", ...formLocales]);

  return {
    props: {
      ...i18n,
    },
  };
};

export default Home;
