import mongoose from 'mongoose' 
export class DB{
    public static Connection(){
        try {
            if(typeof process.env.URL_DB !== 'undefined'){
                mongoose.connect(process.env.URL_DB,{
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
                console.log("Base de Datos Conectada")
            }else{
                throw new Error("No se logro conectar la DB")
            }
        } catch (error) {
            throw error
        }
    }
}