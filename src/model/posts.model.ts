import {PostsInterface} from '../interface/posts.interface'
import postsEntity from '../entity/posts.entity'

export class PostsModel{
    public static GetAll(){
        const posts= postsEntity.find()
        return posts
    }

    public static async Create(body:PostsInterface){
        const posts = new postsEntity(body)
        const save = await posts.save()
        return save

    }

    public static GetByTitle(titleParam:string){
        const posts= postsEntity.find({title:titleParam})
        return posts
    }
}