"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const PORT = process.env.PORT || 4001;
(0, server_1.createCommentsServer)().listen(PORT, () => {
    console.log(`4️⃣ [server]: Comments Server listening port :${PORT}`);
});
