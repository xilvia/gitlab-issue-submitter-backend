import { Module } from '@nestjs/common';
import { IssueService } from './services/issue.service';

@Module({
  providers: [IssueService]
})
export class IssuesModule {}
