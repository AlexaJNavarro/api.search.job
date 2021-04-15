"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("../controller/posts.controller");
const routerPosts = express_1.Router();
routerPosts
    .get("/", posts_controller_1.PostsController.GetAll)
    .post("/", posts_controller_1.PostsController.Create)
    .get("/:TITLE", posts_controller_1.PostsController.GetByTitle);
exports.default = routerPosts;
