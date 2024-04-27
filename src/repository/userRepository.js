import { PrismaClient } from "@prisma/client";

class UserRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async getUsers() {
        return this.prisma.user.findMany();
    }

    async getUserById(id) {
        return this.prisma.user.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }

    async getByName(name) {
        return this.prisma.user.findMany({
            where: {
                name: name
            }
        });
    }

    async createUser(user) {
        return this.prisma.user.create({
            data: user
        });
    }

    async updateUser(id, user) {
        return this.prisma.user.update({
            where: {
                id: parseInt(id)
            },
            data: user
        });
    }

    async deleteUser(id) {
        return this.prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}

export default new UserRepository();
