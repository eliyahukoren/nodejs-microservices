import axios from "axios";
import React, { useState } from "react";
import { IPostId } from "./interface";

const CommentCreate = ({ postId }:IPostId) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
