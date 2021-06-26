import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import * as dotenv from 'dotenv'
import { Injectable } from '@nestjs/common';

dotenv.config()
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor() {
      console.log(process.env.APP_URL)
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.APP_URL+'/api/google/redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos, provider, displayName, id } = profile;
    const user = {
        id: id,
        email: emails[0].value,
        fullname: displayName,
        firstName: name.givenName,
        lastName: name.familyName,
        picture: photos[0].value,
        provider: provider,
        accessToken
    }
    done(null, user);
  }
}
