import { Router } from "express";
import registerController from "../../controllers/registerController.js";

class RouteRegister {

    constructor() {
        this.router = Router();
        this.routes();

    }

    routes() {
        return [
            this.router.post("/registration", registerController.register),
        ]
    }
}

export default new RouteRegister().router;