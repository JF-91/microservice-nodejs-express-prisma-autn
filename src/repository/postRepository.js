import { PrismaClient } from '@prisma/client';


class PostRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }

    async getPosts() {
        return this.prisma.post.findMany();
    }

    async getPostById(id) {
        return this.prisma.post.findUnique({
            where: {
                id: parseInt(id)
            }
        });
    }

    async getByName(name) {
        return this.prisma.post.findMany({
            where: {
                name: name
            }
        });
    }

    async createPost(post) {
        return this.prisma.post.create({
            data: post
        });
    }

    async updatePost(id, post) {
        return this.prisma.post.update({
            where: {
                id: parseInt(id)
            },
            data: post
        });
    }

    async deletePost(id) {
        return this.prisma.post.delete({
            where: {
                id: parseInt(id)
            }
        });
    }
}

export default new PostRepository();