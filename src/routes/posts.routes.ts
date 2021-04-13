import {Router} from 'express'
import {PostsController} from '../controller/posts.controller'

const routerPosts = Router()

routerPosts
    .get("/",PostsController.GetAll)
    .post("/",PostsController.Create)
    .get("/:TITLE",PostsController.GetByTitle)

export default routerPosts