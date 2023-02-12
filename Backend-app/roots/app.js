"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const login_1 = __importDefault(require("./api/login"));
class App {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use('/a', routeLogin.app);
        this.listen(port);
        this.mountRoutes();
    }
    mountRoutes() {
        this.app.get('/asd', (req, res) => {
            res.send("Hello");
        });
    }
    listen(port) {
        this.app.listen(8000, () => {
            console.log("Start port 8000");
        });
    }
}
const routeLogin = new login_1.default();
const serve = new App(8000);
