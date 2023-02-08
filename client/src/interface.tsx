interface IPostList {
  [key: string]: {
    id: string;
    title: string;
  };
}

interface IPost {
  id: string;
  title: string;
};

interface IComment {
  id: string
  content?: string
}

interface IPostId {
  postId: string;
}

export {
  type IPostList,
  type IPost,
  type IComment,
  type IPostId,
};

