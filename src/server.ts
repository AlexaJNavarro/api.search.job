import express,{Application} from 'express'
import cors from 'cors'
import routesPosts from './routes/posts.routes'
import routesMail from './routes/mail.routes'
import fileUpload from 'express-fileupload'

export class Server{
    private app: Application
    
    constructor(){
        this.app= express()

    }
    public Run(){
        this.Settings()
        this.Routes()
        this.Listening()
    }

    private Settings(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(fileUpload())

    }
    private Routes(){
        this.app.use(process.env.BASE_URL +"/posts",routesPosts)
        this.app.use(process.env.BASE_URL +"/mails",routesMail)
    }

    private Listening(){
        this.app.listen(process.env.PORT)
        console.log("Port:" + process.env.PORT)
    }


}