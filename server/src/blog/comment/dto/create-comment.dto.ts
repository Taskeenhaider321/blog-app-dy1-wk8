import { Replies } from "../../../blog/schema/Replies.schema";
import { Blog } from "../../../blog/schema/blog.schema";

export class createCommentDto {
    readonly blog: Blog
    readonly replies: Replies
    readonly content: string
}