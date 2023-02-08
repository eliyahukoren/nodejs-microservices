
interface IComment {
    id: string;
    content: string;
}

interface ICommentsByPostId {
  [postId: string]: IComment[] ;
}

export { IComment, ICommentsByPostId };
