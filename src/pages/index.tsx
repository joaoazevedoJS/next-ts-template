import { FC } from "react";

import { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: FC = () => {
  return (
    <>
      <h1>a</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale = "en" }) => {
  const i18n = await serverSideTranslations(locale, ["pages/home"]);

  return {
    props: {
      ...i18n,
    },
  };
};

export default Home;
