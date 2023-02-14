"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoute = void 0;
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const utilities_1 = require("./utilities");
const commentRoute = (0, express_1.Router)();
exports.commentRoute = commentRoute;
const commentsByPostId = {};
commentRoute.get("/posts/:id/comments", (req, res) => {
    res.status(200).send(commentsByPostId[req.params.id] || []);
});
commentRoute.post("/posts/:id/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentId = (0, utilities_1.generateRandomId)();
    const postId = req.params.id;
    const { content } = req.body;
    const comments = commentsByPostId[postId] || [];
    comments.push({ id: commentId, content, status: "pending" });
    commentsByPostId[postId] = comments;
    yield axios_1.default.post("http://localhost:4005/events", {
        type: "CommentCreated",
        data: {
            id: commentId,
            content,
            postId,
            status: "pending"
        }
    });
    res.status(201).send(comments);
}));
commentRoute.post("/events", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Comments - Received event:", req.body.type);
    const { type, data, content } = req.body;
    if (type === "CommentModerated") {
        const { postId, id, status } = data;
        const comments = commentsByPostId[postId];
        const comment = comments.find(comment => comment.id === id);
        if (comment) {
            comment.status = status;
            yield axios_1.default.post("http://localhost:4005/events", {
                type: "CommentUpdated",
                data: {
                    id, status, postId, content
                }
            }).catch(err => console.log(err));
        }
    }
    res.send({});
}));
