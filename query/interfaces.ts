interface IComment {
  id: string;
  content: string;
  status: string;
}

interface IPost {
  [key: string]: {
    id: string;
    title: string;
    comments: IComment[],
  };
}

interface IData {
  id: string;
  content: string;
  postId: string;
  status: string;
  title: string
}

export { IPost, IComment, IData };
