import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { IPost, IPostList } from "./interface";

const PostList = () => {
  const [posts, setPosts] = useState<IPostList>({});

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");

    console.log(res.data);

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = () => {
    // console.log({"render": posts});
    if( !posts) return "";

    console.log("continue" );

    const result = Object.values(posts).map((post: IPost) => {
      return (
        <div
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
          key={post.id}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
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
