import { request, response } from "express";
import { PrismaClient } from "@prisma/client";
import postRepository from "../repository/postRepository";

class PostService {
    constructor () {
        this.repository = postRepository;
        this.post = new PrismaClient().post;
        this.init();
    }

    init() {
        this.limitPosts = this.limitPosts.bind(this);
    }

    async limitPosts(reuest = request, limit = 10, offset = 0) {
        const { limit, offset } = request.query;
        return this.post.findMany({
            limit: Number(limit),
            offset: Number(offset),
        });
    }

    setPost(post) {
        return this.post.create({
            data: post,
        });
    }
}

export default new PostService();