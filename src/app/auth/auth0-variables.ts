interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'vQLN0V90OASSE2w0cNKJRk2YXFF1XXK1',
  domain: 'jackhummah.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
