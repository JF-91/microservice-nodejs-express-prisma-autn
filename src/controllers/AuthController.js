import { response, request } from "express";
import authService from "../services/authService.js";
import errorHandler from "../helpers/errorHandler.js";

const AuthController = {
    login: (request, response) => {
        try {
            authService.login(request).then((result) => {
                response.status(result.status).json(result);
            });
        } catch (error) {
            errorHandler.handle(error);
        }
    },
    logout: (request, response) => {
        try {
            authService.logout(request).then((result) => {
                response.status(result.status).json(result);
            });
        } catch (error) {
            errorHandler.handle(error);
        }
    },
};

export default AuthController;