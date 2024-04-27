import { request, response } from "express";

const userController = {
    getUsers: (request, response) => {
        console.log("Hello World");
        response.json({ message: "Hello World" });
    },
    getUserById: (request, response) => {
        console.log("Hello World");
        response.json({ message: "Hello World" });
    },
    updateUser: (request, response) => {
        console.log("Hello World");
        response.json({ message: "Hello World" });
    },
    deleteUser: (request, response) => {
        console.log("Hello World");
        response.json({ message: "Hello World" });
    },
};

export default userController;