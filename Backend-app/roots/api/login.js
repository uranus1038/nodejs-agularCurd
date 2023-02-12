"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Login {
    constructor() {
        this.app = (0, express_1.Router)();
        this.Login();
    }
    Login() {
        this.app = (0, express_1.Router)();
        this.app.get('/s', (req, res) => {
            const data = req.query.idx;
            console.log(data);
            res.send('Hello, Users!');
        });
    }
}
exports.default = Login;
//fuctionally <<<<<<<<<<<<<<<<<<<
// app = Route
// const app = Router();
// app.get('/s', (req: Request, res: Response) => {
//   const {data} = req.body ; 
//   console.log(data);
//   res.send('Hello, Users!');
// });
// export default app; 
