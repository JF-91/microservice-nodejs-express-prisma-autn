import { Router } from "express";
import userController from "../../controllers/userController.js";

class RoutesUser {

    constructor() {
        this.router = Router();
        this.routes();

    }

    routes() {
        return [
            this.router.get("/users", userController.getUsers),
            this.router.get("/users/:id", userController.getUserById),
            this.router.put("/users/:id", userController.updateUser),
            this.router.delete("/users/:id", userController.deleteUser),
        ]
    }
}

export default new RoutesUser().router;