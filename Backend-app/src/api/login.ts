import  {Router ,Request, Response } from 'express';
export default class Login {
    public app = Router();
    constructor()
    {
        this.Login();
    }
    Login() {
        this.app = Router();
        this.app.get('/s', (req: Request, res: Response) => {
            const data  = req.query.idx;
            console.log(data);
            res.send('Hello, Users!');
        });
    }
}   
//fuctionally <<<<<<<<<<<<<<<<<<<
// app = Route
// const app = Router();
// app.get('/s', (req: Request, res: Response) => {
//   const {data} = req.body ; 
//   console.log(data);
//   res.send('Hello, Users!');
// });
// export default app; 

