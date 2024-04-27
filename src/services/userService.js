import userRepository from "../repository/userRepository.js";
import { PrismaClient } from "@prisma/client";

class UserService {
    constructor() {
        this.repository = userRepository;
        this.user = new PrismaClient().user;
        this.init();
    }

    init() {
        this.limitUsers = this.limitUsers.bind(this);
    }

    async limitUsers(request = request) {
        const { limit, offset } = request.query;
        return this.user.findMany({
            limit: limit === undefined ? 10 : parseInt(limit),
            offset: offset === undefined ? 0 : parseInt(offset),
        });
    }

    async filterUsers(request = request) {
        const { name } = request.query;
        return this.user.findMany({
            where: {
                name: {
                    contains: name,
                },
            },
        });
    }

    async getUsers() {
        return this.repository.getUsers();
    }

    async getUserById(id) {
        return this.repository.getUserById(id);
    }

    async createUser(user) {
        return this.repository.createUser(user);
    }

    async updateUser(id, user) {
        return this.repository.updateUser(id, user);
    }

    async deleteUser(id) {
        return this.repository.deleteUser(id);
    }

    async getUsersByName(name) {
        return this.repository.getByName(name);
    }
}

export default new UserService();