import { request, response } from "express";
import postService from "../services/postService.js";
import errorHandler from "../helpers/errorHandler.js";

const postController = {
    getPosts: async (request, response) => {
        try {
            const posts = await postService.getPosts();
            response.status(200).json(posts);
        } catch (error) {
            errorHandler.handle(error, response)
        }
    },

    getPostById: async (request, response) => {
        try {
            const post = await postService.getPostById(request.params.id)
            response.status(200).json(post);
        } catch (error) {
            errorHandler.handle(error, response)
        }
    },

    updatePost: async (request, response) => {
        try {
            const post = await postService.updatePost(request.params.id, request.body)
            response.status(200).json(post);
        } catch (error) {
            errorHandler.handle(error, response)
        }
    },

    deletePost: async (request, response) => {
        try {
            await postService.deletePost(request.params.id)
            response.status(204).send();
        } catch (error) {
            errorHandler.handle(error, response)
        }
    },
}

export default postController;