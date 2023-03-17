import { Comment } from "./comment.model";
export class Question {
  constructor(
    public id: string,
    public text: string,
    public category: string,
    public countOfLikes: number,
    public comments: Comment[]
  ) {}
}
