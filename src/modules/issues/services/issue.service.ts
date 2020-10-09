import { Injectable, HttpService } from '@nestjs/common';
import qs = require('qs');
import { IssueDto } from '../dto/issue.dto';

@Injectable()
export class IssueService {
  private url = 'https://gitlab.com/api/v4';

  constructor(private http: HttpService) {}

  async createIssue(issueDto: IssueDto, id) {
   const url = `${this.url}/projects/${id}/issues`;
    const response = await this.http
      .post(url, qs.stringify(issueDto))
      .toPromise()
      .then(response => response.data)
      .catch(error => console.error(error));
    return response;
  }

}
