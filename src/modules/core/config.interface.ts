export interface IGitLabUrls {
  authUrl: string;
}

export interface IGitLabUrlConfigs {
  development: IGitLabUrls;
  test: IGitLabUrls;
  production: IGitLabUrls;
}
