interface IPostList {
  [key: string]: {
    id: string;
    title: string;
    comments: IComment[];
  };
}

interface IPost {
  id: string;
  title: string;
  comments: IComment[]
};

interface IComment {
  id: string
  content: string
  status: "pending" | "approved" | "rejected"
}

interface IPostId {
  postId: string;
}

export {
  type IPostList,
  type IPost,
  type IComment,
  type IPostId
};

