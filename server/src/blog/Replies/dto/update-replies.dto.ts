import { User } from "../../../auth/schema/user.schemas";
import { Blog } from "../../../blog/schema/blog.schema";
import { Comment } from "../../../blog/schema/comment.schema";

export class updateRepliesDto {
    readonly blog: Blog;
    readonly content: string;
    readonly user:User;
    readonly comment:Comment
}