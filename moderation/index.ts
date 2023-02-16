import { createModerationServer } from "./server";

const PORT = process.env.PORT || 4003;

createModerationServer().listen(PORT, () => {
  console.log(
    `5️⃣ [server]: Moderation Server listening port :${PORT}`
  );
});
