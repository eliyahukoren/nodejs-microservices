"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomId = void 0;
const crypto_1 = require("crypto");
const generateRandomId = () => {
    return (0, crypto_1.randomBytes)(4).toString("hex");
};
exports.generateRandomId = generateRandomId;
