import {Document} from 'mongoose'
export interface PostsInterface extends Document{
    title:string,
    description: string,
    company_name:string,
    mail:string,
    location:string,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date,
}