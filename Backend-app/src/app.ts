import express, { Request, Response } from 'express';
import usersRouter from './api/login';
class App {
    private app: express.Application = express();;
    constructor(port:number) {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/a',usersRouter);
        this.listen(port); 
        this.mountRoutes();
    }
    private  mountRoutes(): void {
        this.app.get('/asd',(req : Request , res : Response)=>
        {
            res.send("Hello");
        });
    }
    private listen(port:number): void {
        this.app.listen(8000,()=>
        {
            console.log("Start port 8000") ;
        });
    }
}
const serve = new App(8000);