
interface IComment {
    id: string;
    content: string;
    status?: "approved" | "rejected" | "pending"
}

interface ICommentsByPostId {
  [postId: string]: IComment[] ;
}

export { IComment, ICommentsByPostId };
