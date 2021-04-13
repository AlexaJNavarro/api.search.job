import dotenv from 'dotenv'
import {Server} from './server' 
import {DB} from './db/connection.db'

(()=>{
    dotenv.config()
    DB.Connection()
    const server = new Server()
    server.Run()
})()