import { request, response } from "express";
import registerService from "../services/registerService.js";
import errorHandler from "../helpers/errorHandler.js";

const registerController = {
    register: (request, response) => {
        try {
            registerService.register(request).then((result) => {
                response.status(result.status).json(result);
            });
        } catch (error) {
            errorHandler.handle(error);
        }
    },
};

export default registerController;