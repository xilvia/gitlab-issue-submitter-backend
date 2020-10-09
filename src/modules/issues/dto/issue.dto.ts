export interface IssueDto {
  id: number;
  title: string;
  description: string;
  assignee: string;
  labels: string | '';
}
