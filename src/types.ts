import {
  Server,
  ServerRequest,
} from "https://deno.land/std@0.78.0/http/server.ts";

export type WebRequest = {};
export type WebResponse = {};
export type Next = () => void;
export type Middleware = (
  req: WebRequest,
  res: WebResponse,
  next?: Next
) => void;
export type RouteRegistrant = (
  path: string,
  ...middlewares: Array<Middleware>
) => void;
export type MiddlewareRegistrant = (
  path?: string,
  ...middlewares: Array<Middleware>
) => void;
export type TemplateEngineHandler = (
  path: string,
  options: object,
  callback: () => void
) => void;

export interface AppRoute {
  all: (handler: Middleware) => AppRoute;
  delete: (handler: Middleware) => AppRoute;
  get: (handler: Middleware) => AppRoute;
  post: (handler: Middleware) => AppRoute;
  put: (handler: Middleware) => AppRoute;
}

export interface Application {
  all: RouteRegistrant;
  delete: RouteRegistrant;
  disable: (name: string) => void;
  disabled: (name: string) => boolean;
  enable: (name: string) => void;
  enabled: (name: string) => boolean;
  engine: (ext: string, callback: TemplateEngineHandler) => void;
  get: RouteRegistrant | ((name: string) => any);
  handle: (req: ServerRequest) => void;
  listen: (port?: number, host?: string, callback?: () => void) => Server;
  param: (name: string | Array<string>) => void;
  path: () => string;
  post: RouteRegistrant;
  put: RouteRegistrant;
  render: (
    view: string,
    locals?: object,
    callback?: (error: null | Error, html: string) => void
  ) => void;
  route: (path: string) => AppRoute;
  set: (name: string, value: any) => void;
  use: MiddlewareRegistrant;
}
