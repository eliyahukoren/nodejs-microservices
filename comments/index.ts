import { createCommentsServer } from "./server";

const PORT = process.env.PORT || 4001;

createCommentsServer().listen(PORT, () => {
  console.log(`4️⃣ [server]: Comments Server listening port :${PORT}`);
});
