import { request, response } from "express";
import { PrismaClient } from "@prisma/client";
import postRepository from "../repository/postRepository.js";

class PostService {
    constructor () {
        this.repository = postRepository;
        this.post = new PrismaClient().post;
        this.init();
    }

    init() {
        this.limitPosts = this.limitPosts.bind(this);
    }

    async limitPosts(reuest = request) {
        const { limit, offset } = request.query;
        return this.post.findMany({
            limit: limit === undefined ? 10 : parseInt(limit),
            offset: offset === undefined ? 0 : parseInt(offset),
        });
    }

    async filerPosts(request = request) {
        const { title } = request.query;
        return this.post.findMany({
            where: {
                title: {
                    contains: title,
                },
            },
        });
    }

    async getPosts() {
        return this.repository.getPosts();
    }

    async getPostById(id) {
        return this.repository.getPostById(id);
    }

    async createPost(post) {
        return this.repository.createPost(post);
    }

    async updatePost(id, post) {
        return this.repository.updatePost(id, post);
    }

    async deletePost(id) {
        return this.repository.deletePost(id);
    }

    async getPostsByTitle(title) {
        return this.repository.getByName(title);
    }



}

export default new PostService();