import { FC, PropsWithChildren } from "react";
import { Layout } from "@/presentation/pages/Home/Layout/styles";

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => <Layout>{children}</Layout>;
