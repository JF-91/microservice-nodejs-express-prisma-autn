import { response, request } from "express";

const loginController = {
    login: (request, response) => {
        console.log("Hello World");
        response.json({ message: "Hello World" });
    },
    logout: (request, response) => {
        console.log("Hello World");
        response.json({ message: "Hello World" });
    },
};

export default loginController;