import axios from "axios";
import { Request, Response, Router } from "express";

const moderationRoute = Router();

moderationRoute.post("/events", async (req: Request, res: Response) => {
  console.log("Moderation - Received event:", req.body.type);
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    const event = {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    };

    setTimeout(async () => {
      console.log("Emit moderation!");
      await axios.post("http://localhost:4005/events", event).catch((err) => {
        console.log(err.message);
      });

    }, 10000)

  }

  res.send({});
});

export { moderationRoute };
