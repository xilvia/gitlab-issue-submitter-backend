import { Injectable, HttpService } from '@nestjs/common';
import { AuthDto } from '../dto/auth.dto';
import qs = require('qs');

@Injectable()
export class AuthService {
  private url = 'https://gitlab.com/oauth/token';
  constructor(private http: HttpService) {}

  async login(url, authDto: AuthDto) {
    url = this.url;
    const response = await this.http
      .post(url, qs.stringify(authDto))
      .toPromise()
      .then(response => response.data)
      .catch(error => console.error(error));
    return response;
  }
}
