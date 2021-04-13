import{Schema,model} from 'mongoose' 
import {PostsInterface} from '../interface/posts.interface'

const postsSchema:Schema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    company_name:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    created_at:{
        type:Date,
        default:new Date()
    },
    updated_at: {
        type:Date
    },
    deleted_at: {
        type:Date
    }
})
export default model<PostsInterface>('posts',postsSchema)