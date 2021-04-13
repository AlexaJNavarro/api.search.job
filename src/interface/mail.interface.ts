import {Document} from 'mongoose'

export interface mailInterface extends Document{                                         
    user:string,                                                    //transporter
    pass:string,
    
    from:string,                                                    //mail
    to: string,
    subject:string,
    text:string,

}