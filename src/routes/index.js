import RoutesUser from "./users/index.js";
import RouteAuth from "./auth/index.js";
import RouteRegister from "./register/index.js";
import RoutesPost from "./posts/index.js";
import { Router } from "express";

class AppRouter {
    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        return [
            this.router.use(RoutesUser),
            this.router.use(RouteAuth),
            this.router.use(RouteRegister),
            this.router.use(RoutesPost),
        ]
    }
}

export default new AppRouter().router;