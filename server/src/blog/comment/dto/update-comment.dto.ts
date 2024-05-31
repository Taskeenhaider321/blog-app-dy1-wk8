import { Replies } from "../../../blog/schema/Replies.schema";
import { Blog } from "../../../blog/schema/blog.schema";

export class updateCommentDto {
    readonly blog: Blog
    readonly replies: Replies
    readonly content: string
}