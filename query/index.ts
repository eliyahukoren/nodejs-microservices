import getQueryService from "./QueryService";
import { createQueryServer } from "./server";

const PORT = process.env.PORT || 4002;

createQueryServer().listen(PORT, async () => {
  const queryService = getQueryService();

  console.log(
    `2️⃣ [server]: Query Server is running at http://localhost:${PORT}`
  );

  queryService.initEvents();

});
