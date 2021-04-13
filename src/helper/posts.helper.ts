export class Answer{
    public type_message
    public message
    public error
    public data

    constructor(
        type_message:string,
        message:string,
        error:boolean,
        data:any
    ){
        this.type_message=type_message
        this.message=message
        this.error=error
        this.data=data
        
    }
}