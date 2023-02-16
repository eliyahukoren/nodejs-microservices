import axios from "axios";
import { IData, IPost } from "./interfaces";

let queryService: any;

export default function getQueryService(){
  if (!queryService) {
    queryService = new QueryService();
  }

  return queryService;
}

class QueryService {
  postsList: IPost = {};
  eventBusService = { host: `http://event-bus-srv:4005/events` };

  async initEvents(){
      try {
        const res = await axios.get(this.eventBusService.host);

        for (let event of res.data) {
          console.log("Processing event:", event);
          const { type, data } = event;
          this.handleEvent({ type, data });

        }

        console.log({NOW: this.posts})
      } catch (error) {
        console.log(error);
      }
  }

  handleEvent({ type, data }: { type: string; data: IData }) {
    if (type === "PostCreated") {
      this.createPost(data);
    }

    if (type === "CommentCreated") {
      this.createComment(data);
    }

    if (type === "CommentUpdated") {
      this.updateComment(data);
    }
  }

  updateComment(data: IData) {
    const { id, content, postId, status } = data;
    const post = this.postsList[postId];
    const comment = post.comments.find((comment) => comment.id === id);

    if (comment) {
      comment.status = status;
      comment.content = content;
    }

    console.log({ handleCommentUpdated: comment });
  }

  // TODO: fix any type
  createPost(data: any) {
    const { id, title } = data;
    this.postsList[id] = { id, title, comments: [] };
  }

  // TODO: fix any type
  createComment(data: any) {
    const { id, content, postId, status } = data;
    const post = this.postsList[postId];
    post.comments.push({ id, content, status });
  }

  get posts(): IPost {
    return this.postsList;
  }
}
