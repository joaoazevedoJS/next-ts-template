import { HttpProvider } from "@/providers";

import { DashboardAuthentication } from "./usecases/Dashboard";

export const Authentication = new DashboardAuthentication(HttpProvider, {
  login: "/auth/login",
});
