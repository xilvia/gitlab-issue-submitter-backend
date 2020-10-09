export interface IGitLabUrls {
  apiUrl: string;
  authUrl: string;
}

export interface IGitLabUrlConfigs {
  development: IGitLabUrls;
  test: IGitLabUrls;
  production: IGitLabUrls;
}
