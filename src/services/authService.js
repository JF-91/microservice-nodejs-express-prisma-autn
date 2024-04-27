import { PrismaClient } from "@prisma/client";
import { request } from "express";
import jwtService from "./jwtService.js";

class AuthRepository {
    constructor() {
        this.prisma = new PrismaClient();
        this.jwtService = jwtService;
    }

    async login(request = request) {
        const { email, password } = request.body;
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return {
                message: "User not found",
                status: 404,
            };
        }

        if (user.password !== password) {
            return {
                message: "Invalid password",
                status: 401,
            };
        }

        const token = this.jwtService.generateToken(user);
        return {
            token: token,
            user: user,
        };
    }

    async logout(request = request) {
        return {
            message: "Logout successful",
            status: 200,
        };
    }

}

export default new AuthRepository();
