import {Router} from 'express' 
import {mailController} from '../controller/mail.controller'

const routesMail = Router()
routesMail
    .post("/",mailController.SendMail)

export default routesMail