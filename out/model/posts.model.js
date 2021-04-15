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
exports.PostsModel = void 0;
const posts_entity_1 = __importDefault(require("../entity/posts.entity"));
class PostsModel {
    static GetAll() {
        const posts = posts_entity_1.default.find();
        return posts;
    }
    static Create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = new posts_entity_1.default(body);
            const save = yield posts.save();
            return save;
        });
    }
    static GetByTitle(titleParam) {
        const posts = posts_entity_1.default.find({ title: titleParam });
        return posts;
    }
}
exports.PostsModel = PostsModel;
