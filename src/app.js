import Config from "./config/config.js";
import express from "express";
import AppRouter from "./routes/index.js";
import cors from "cors";

class App {
    constructor() {
        this.app = express();
        this.config = Config;
        this.init();
    }

    init() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.routes();
        this.listen();
    }

    routes() {
        this.app.use("/api",AppRouter);
    }

    listen() {
        this.app.listen(this.config.getPort(), () => {
            console.log(`Server running on port ${this.config.getPort()}`);
        });
    }
}

export default new App();