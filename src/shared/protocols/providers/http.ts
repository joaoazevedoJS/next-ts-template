import { HttpStatusCode } from "@/shared/status";

type Headers = {
  [header: string]: string;
};

export type IHttpResponseProtocol<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export type IHttpGetMethod = {
  url: string;
  headers?: Headers;
};

export type IHttpPostMethod<T> = {
  url: string;
  body?: T;
  headers?: Headers;
};

export type IHttpDeleteMethod = {
  url: string;
  headers?: Headers;
};

export type IHttpPutMethod<T> = {
  url: string;
  body?: T;
  headers?: Headers;
};

export type IHttpProtocol = {
  get<R>(params: IHttpGetMethod): Promise<IHttpResponseProtocol<R>>;
  post<T, R>(params: IHttpPostMethod<T>): Promise<IHttpResponseProtocol<R>>;
  delete<R>(params: IHttpDeleteMethod): Promise<IHttpResponseProtocol<R>>;
  put<T, R>(params: IHttpPutMethod<T>): Promise<IHttpResponseProtocol<R>>;
};
