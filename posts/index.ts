import { createPostsServer } from "./server";

const PORT = process.env.PORT || 4000;

createPostsServer().listen(PORT, () => {
  console.log("Posts v11");
  console.log(`3️⃣ [server]: Posts Server listening port:${PORT}`);
});

