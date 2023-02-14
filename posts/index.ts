import { createPostsServer } from "./server";

const PORT = process.env.PORT || 4000;

createPostsServer().listen(PORT, () => {
  console.log(`3️⃣ [server]: Posts Server is running at http://localhost:${PORT}`);
});
