import { randomBytes } from "crypto";

const generateRandomId = (): string => {
  return randomBytes(4).toString("hex");
};

export {
  generateRandomId
};

