import { createPostsServer } from "./server";

const PORT = process.env.PORT || 4000;

createPostsServer().listen(PORT, () => {
  console.log(`🛡️[server]: Server is running at http://localhost:${PORT}`);
});
