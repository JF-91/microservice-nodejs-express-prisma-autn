import { request } from "express";
import { PrismaClient } from "@prisma/client";
import jwtService from "./jwtService.js";
import bcrypt from "bcrypt";

class RegisterService {
    constructor() {
        this.prisma = new PrismaClient();
        this.jwtService = jwtService;
        this.bcrypt = bcrypt;
    }

    async register(request) {
        const { name, email, password } = request.body;
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            
            },
        });

        if (user) {
            return {
                message: "User already exists",
                status: 409,
            };
        }

        const hashedPassword = await this.bcrypt.hash(password, 10);

    

        const newUser = await this.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        const token = this.jwtService.generateToken(newUser);

        return {
            token: token,
            user: newUser,
        };
    }

    userExists(email) {
        if (this.prisma.user.findUnique({
            where: {
                email: email,
            },
        })) {
            return true;
        }

        return false;
    }

   validateRegister(request) {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            return false;
        }

        return true;
    }

}

export default new RegisterService();