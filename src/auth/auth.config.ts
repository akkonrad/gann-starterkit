import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfig {

  public useAuth: boolean;
  public userPoolId: string;
  public clientId: string;
  public region: string;
  public authority;

  constructor() {
    const {COGNITO_USER_POOL_ID, COGNITO_CLIENT_ID, COGNITO_REGION, USE_AUTH} = process.env;

    this.useAuth = USE_AUTH === 'true';

    if (this.useAuth) {
      this.userPoolId = COGNITO_USER_POOL_ID;
      this.clientId = COGNITO_CLIENT_ID;
      this.region = COGNITO_REGION;

      this.authority = `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`;
    }

  }
}
