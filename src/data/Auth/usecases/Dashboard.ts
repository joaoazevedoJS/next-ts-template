import { IAuthenticationProtocol, IAuthLoginParams, IAuthLoginResponse } from "@/shared/protocols/data";

import { IHttpProtocol } from "@/shared/protocols/providers";

import { HttpStatusCode } from "@/shared/status";

import { InvalidCredentialsError, UnexpectedError } from "@/shared/errors";

export class DashboardAuthentication implements IAuthenticationProtocol {
  constructor(
    private readonly httpProvider: IHttpProtocol,
    private readonly paths: HttpPathBuilder<IAuthenticationProtocol>
  ) {}

  async login(params: IAuthLoginParams): Promise<IAuthLoginResponse | undefined> {
    const httpResponse = await this.httpProvider.post<IAuthLoginParams, IAuthLoginResponse>({
      url: this.paths.login,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new InvalidCredentialsError();
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
