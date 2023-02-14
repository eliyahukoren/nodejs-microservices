import { IComment } from "./interface";

const CommentList = ( {comments}: any ) => {

  const renderedComments = comments.map((comment: IComment) => {
    let content;

    if( comment.status === "approved"){
      content = comment.content
    }

    if (comment.status === "pending") {
      content = "This comment is waiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
