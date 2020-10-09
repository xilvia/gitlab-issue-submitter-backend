import { Controller, Get, Logger, Request } from '@nestjs/common';
import { IssueDto } from '../dto/issue.dto';
import { IssueService } from '../services/issue.service';

@Controller('issue')
export class IssueController {
    private logger = new Logger()
  constructor(private issueService: IssueService) {}

}
