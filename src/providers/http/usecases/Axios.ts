import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import {
  IHttpDeleteMethod,
  IHttpGetMethod,
  IHttpPostMethod,
  IHttpProtocol,
  IHttpPutMethod,
  IHttpResponseProtocol,
} from "@/shared/protocols/providers";

import { UnexpectedError } from "@/shared/errors";

export class AxiosHttp implements IHttpProtocol {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ withCredentials: true });
  }

  async get<R>(params: IHttpGetMethod): Promise<IHttpResponseProtocol<R>> {
    let httpResponse: AxiosResponse<R> | undefined;

    try {
      httpResponse = await this.axiosInstance.get<R>(params.url, {
        headers: params.headers,
      });
    } catch (error) {
      const err = error as AxiosError<R>;

      httpResponse = err.response;
    }

    if (!httpResponse) throw new UnexpectedError();

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async post<T, R>(params: IHttpPostMethod<T>): Promise<IHttpResponseProtocol<R>> {
    let httpResponse: AxiosResponse<R> | undefined;

    try {
      httpResponse = await this.axiosInstance.post<R>(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error) {
      const err = error as AxiosError<R>;

      httpResponse = err.response;
    }

    if (!httpResponse) throw new UnexpectedError();

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async put<T, R>(params: IHttpPutMethod<T>): Promise<IHttpResponseProtocol<R>> {
    let httpResponse: AxiosResponse<R> | undefined;

    try {
      httpResponse = await this.axiosInstance.put<R>(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error) {
      const err = error as AxiosError<R>;

      httpResponse = err.response;
    }

    if (!httpResponse) throw new UnexpectedError();

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }

  async delete<R>(params: IHttpDeleteMethod): Promise<IHttpResponseProtocol<R>> {
    let httpResponse: AxiosResponse<R> | undefined;

    try {
      httpResponse = await this.axiosInstance.delete<R>(params.url, {
        headers: params.headers,
      });
    } catch (error) {
      const err = error as AxiosError<R>;

      httpResponse = err.response;
    }

    if (!httpResponse) throw new UnexpectedError();

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
