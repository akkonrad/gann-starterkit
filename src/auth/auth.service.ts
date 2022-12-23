import { Injectable } from '@nestjs/common';
import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession, } from 'amazon-cognito-identity-js';
import { AuthConfig } from './auth.config';

@Injectable()
export class AuthService {
  private readonly userPool: CognitoUserPool;

  constructor(private readonly authConfig: AuthConfig) {
    if (this.authConfig.useAuth) {
      this.userPool = new CognitoUserPool({
        UserPoolId: this.authConfig.userPoolId,
        ClientId: this.authConfig.clientId,
      });
    }
  }

  authenticateUser(user: { name: string; password: string }) {
    const {name, password} = user;

    const authenticationDetails = new AuthenticationDetails({
      Username: name,
      Password: password,
    });
    const userData = {
      Username: name,
      Pool: this.userPool,
    };

    const newUser = new CognitoUser(userData);

    return new Promise((resolve, reject) => {
      return newUser.authenticateUser(authenticationDetails, {
        onSuccess: (result: CognitoUserSession) => {
          resolve(result);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  }
}
