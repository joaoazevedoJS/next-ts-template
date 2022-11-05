import { UserEntity } from "@/shared/entities";

export type IAuthLoginResponse = {
  user: UserEntity;
  token: string;
};

export type IAuthLoginParams = {
  email: string;
  password: string;
};

export type IAuthenticationProtocol = {
  login(params: IAuthLoginParams): Promise<IAuthLoginResponse | undefined>;
};
