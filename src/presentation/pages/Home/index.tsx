import React, { FC, PropsWithChildren } from "react";

import { HomeLayout } from "./Layout";
import { HomeHello } from "./Hello";
import { HomeFormExample } from "./FormExample";

type IHome = ReactDotNotation<
  FC<PropsWithChildren>,
  {
    Form: FC;
    Hello: FC;
  }
>;

export const HomeContent: IHome = (props) => <HomeLayout {...props} />;

HomeContent.Hello = HomeHello;
HomeContent.Form = HomeFormExample;
