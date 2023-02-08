import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { IPost, IPostList } from "./interface";


const PostList = () => {
  const [posts, setPosts] = useState<IPostList | undefined>({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);



  const renderedPosts = () => {
    if( !posts) return "";

    const result = Object.values(posts).map((post:IPost) => {
      return (
        <div
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
          key={post.id}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList postId={post.id} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      );
    });

    return result;
  }

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts()}
    </div>
  );
};

export default PostList;
