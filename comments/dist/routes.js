"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoute = void 0;
const express_1 = require("express");
const utilities_1 = require("./utilities");
const commentRoute = (0, express_1.Router)();
exports.commentRoute = commentRoute;
const commentsByPostId = {};
commentRoute.get("/posts/:id/comments", (req, res) => {
    console.log(req.params);
    console.log(commentsByPostId);
    res.status(200).send(commentsByPostId[req.params.id] || []);
});
commentRoute.post("/posts/:id/comments", (req, res) => {
    const commentId = (0, utilities_1.generateRandomId)();
    const postId = req.params.id;
    const { content } = req.body;
    console.log(req.body);
    const comments = commentsByPostId[postId] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[postId] = comments;
    res.status(201).send(comments);
});
