import express, { Request, Response } from 'express';
import cors from "cors";
import Login from './api/login';
class App {
    private app: express.Application = express();
    constructor(port:number) {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/a',routeLogin.app);
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
const routeLogin = new Login();
const serve = new App(8000);