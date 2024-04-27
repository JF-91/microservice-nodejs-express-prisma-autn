import { Router } from "express";
import postController from "../../controllers/postsController.js";

class RoutesPost {

    constructor() {
        this.router = Router();
        this.routes();

    }

    routes() {
        return [
            this.router.get("/posts", postController.getPosts),
            this.router.get("/posts/:id", postController.getPostById),
            this.router.put("/posts/:id", postController.updatePost),
            this.router.delete("/posts/:id", postController.deletePost),
        ]
    }
}

export default new RoutesPost().router;