import { createEventServer } from "./server";

const PORT = 4005;

console.log("Event Bus v11");

createEventServer().listen(PORT, () => {
  console.log(`1️⃣ [server]: Events Bus listening port :${PORT}`);
});
