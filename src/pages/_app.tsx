import { FC } from "react";

import { AppProps } from "next/app";

import Head from "next/head";

import { appWithTranslation } from "next-i18next";

import { ToastContainer } from "react-toastify";

import { GlobalStyled } from "@/presentation/styles";

import "react-toastify/dist/ReactToastify.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Next Typescript Template</title>
      </Head>

      <GlobalStyled />

      <Component {...pageProps} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default appWithTranslation(MyApp);
