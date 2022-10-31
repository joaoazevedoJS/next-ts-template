import { FC } from "react";

import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HomeContent } from "@/presentation/pages/Home";

import { formLocales, required } from "@/presentation/locales";

const Home: FC = () => (
  <HomeContent>
    <HomeContent.Hello />

    <HomeContent.Form />
  </HomeContent>
);

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  const i18n = await serverSideTranslations(locale, ["pages/home", ...required, ...formLocales]);

  return {
    props: {
      ...i18n,
    },
  };
};

export default Home;
