import { Router } from "express";
import AuthController from "../../controllers/AuthController.js";

class RouteAuth {

    constructor() {
        this.router = Router();
        this.routes();

    }

    routes() {
        return [
            this.router.post("/login", AuthController.login),
           this.router.post("/logout", AuthController.logout),
        ]
    }
}

export default new RouteAuth().router;