declare module 'next/server' {
  interface RouteContext {
    params: { [key: string]: string | string[] };
  }
}