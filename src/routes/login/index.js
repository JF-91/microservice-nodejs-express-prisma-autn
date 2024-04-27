import { Router } from "express";
import loginController from "../../controllers/loginController.js";

class RouteLogin {

    constructor() {
        this.router = Router();
        this.routes();

    }

    routes() {
        return [
            this.router.post("/login", loginController.login),
           this.router.post("/logout", loginController.logout),
        ]
    }
}

export default new RouteLogin().router;