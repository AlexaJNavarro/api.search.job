import {Request, Response} from 'express' 
import {mailInterface} from '../interface/mail.interface'
import nodemailer from 'nodemailer'
import { Answer } from '../helper/posts.helper'
import {v4 as uuidv4} from 'uuid'

export class mailController{
    public static  SendMail(req:Request, res:Response):Response{
        const data:mailInterface = req.body
        const EDFile: any = req.files
        const uuid = uuidv4()
        const name = `${uuid}-${EDFile.path.name}`
        const direction = `./src/file/${name}`
        EDFile.path.mv(direction,(err)=>{
            
            if(err){
                const response = new Answer("Error",err,true,null)
                res.status(500).json(response)
            }
            
            const transporter=nodemailer.createTransport({
                service:"gmail",                                        
                auth:{
                    user:data.user,
                    pass:data.pass
                }
            })
    
            const mail={
                from:data.from,                                                    
                to: data.to,
                subject:data.subject,
                text:data.text,
                attachments :[
                    {
                        filename:name,
                        path:direction
                    }
                ]
            }

            transporter.sendMail(mail,(err,info)=>{
                if(err){
                    const response = new Answer("Error",err.message,true,null)
                    res.status(500).json(response)
                }
                const response = new Answer("Message","Correo Enviado", false, info)
                res.status(200).json(response)
            })          
         })

         return res


        

        

    }
}


	
	
	