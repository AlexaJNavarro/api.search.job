import {Request, Response} from 'express'
import {PostsInterface} from '../interface/posts.interface'
import {PostsModel} from '../model/posts.model'
import {Answer} from '../helper/posts.helper'

export class PostsController{
    public static async GetAll(req: Request, res:Response): Promise<Response>{
        try {
            const posts = await PostsModel.GetAll()
            const response = new Answer("Message","Se realizo la consulta",false,posts)
            return res.status(200).json(response)

        } catch (error) {
            const response = new Answer("Error",error,true,null)
            return res.status(404).json(response)
        }
    }

    public static async Create(req:Request, res:Response):Promise<Response>{
        try {
            const body:PostsInterface = req.body
            const posts = await PostsModel.Create(body)
            const response = new Answer("Message","Se registro correctamente",false,posts)
            return res.status(201).json(response)

        } catch (error) {
            const response = new Answer("Error",error,true,null)
            return res.status(404).json(response)
            
        }
    }

    public static async GetByTitle(req:Request, res:Response):Promise<Response>{
        try {
            const title = req.params.TITLE
            const posts = await PostsModel.GetByTitle(title)
            const response = new Answer("Message","Consulta Exitosa",false,posts)
            return res.status(200).json(response)

        } catch (error) {

            const response = new Answer("Error", error, true, null)
            return res.status(404).json(response)
            
        }

    }
}