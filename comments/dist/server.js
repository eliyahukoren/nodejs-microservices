"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommentsServer = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const createCommentsServer = () => {
    const app = (0, express_1.default)();
    const allowedOrigins = ["http://localhost:3000"];
    const options = {
        origin: allowedOrigins,
    };
    app.use((0, cors_1.default)(options));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use("/", routes_1.commentRoute);
    return app;
};
exports.createCommentsServer = createCommentsServer;
