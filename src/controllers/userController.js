import { request, response } from "express";
import userService from "../services/userService.js";
import errorHandler from "../helpers/errorHandler.js";

const userController = {
    getUsers: (request, response) => {
        try {
            userService.getUsers().then((users) => {
                response.status(200).json(users);
            });
        } catch (error) {
            errorHandler.handle(error);
        }
    },
    getUserById: (request, response) => {
        try {
            userService.getUserById(request.params.id).then((user) => {
                response.status(200).json(user);
            });
        } catch (error) {
            errorHandler.handle(error);
        }
    },
    updateUser: (request, response) => {
        try {
            userService.updateUser(request.params.id, request.body).then((user) => {
                response.status(200).json(user);
            });
        } catch (error) {
            errorHandler.handle(error);
        }
    },
    deleteUser: (request, response) => {
        try {
            userService.deleteUser(request.params.id).then((user) => {
                response.status(200).json(user);
            });
        } catch (error) {
            errorHandler.handle(error);
        }
    },
};

export default userController;