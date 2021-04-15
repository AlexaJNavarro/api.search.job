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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const posts_model_1 = require("../model/posts.model");
const posts_helper_1 = require("../helper/posts.helper");
class PostsController {
    static GetAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield posts_model_1.PostsModel.GetAll();
                const response = new posts_helper_1.Answer("Message", "Se realizo la consulta", false, posts);
                return res.status(200).json(response);
            }
            catch (error) {
                const response = new posts_helper_1.Answer("Error", error, true, null);
                return res.status(404).json(response);
            }
        });
    }
    static Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const posts = yield posts_model_1.PostsModel.Create(body);
                const response = new posts_helper_1.Answer("Message", "Se registro correctamente", false, posts);
                return res.status(201).json(response);
            }
            catch (error) {
                const response = new posts_helper_1.Answer("Error", error, true, null);
                return res.status(404).json(response);
            }
        });
    }
    static GetByTitle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const title = req.params.TITLE;
                const posts = yield posts_model_1.PostsModel.GetByTitle(title);
                const response = new posts_helper_1.Answer("Message", "Consulta Exitosa", false, posts);
                return res.status(200).json(response);
            }
            catch (error) {
                const response = new posts_helper_1.Answer("Error", error, true, null);
                return res.status(404).json(response);
            }
        });
    }
}
exports.PostsController = PostsController;
