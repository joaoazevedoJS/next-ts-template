import { FC } from "react";

import { AppProps } from "next/app";

import Head from "next/head";

import { appWithTranslation } from "next-i18next";

import { GlobalStyled } from "@/presentation/styles/GlobalStyled";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Next Typescript Template</title>
      </Head>

      <GlobalStyled />

      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
