import { request, response } from "express";

const registerController = {
    register: (request, response) => {
        console.log("Hello World");
        response.json({ message: "Hello World" });
    },
};

export default registerController;