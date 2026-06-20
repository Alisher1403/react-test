import type { FetchArgs } from "@reduxjs/toolkit/query";

type AxiosGetOptions = Partial<FetchArgs>;

function axiosGet<T>(url: string, options?: AxiosGetOptions) {
  const fullUrl = new URL(url);
  const cleanedParams = JSON.parse(JSON.stringify(options?.params));
  const searchParams = new URLSearchParams(cleanedParams);
  fullUrl.search = searchParams.toString();
  return fetch(fullUrl.toString()).then((response) => response.json()) as Promise<T>;
}

export const axiosClient = {
  get: axiosGet,
};
