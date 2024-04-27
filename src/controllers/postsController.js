import { request, response } from "express";
import postService from "../services/postService.js";
import errorHandler from "../helpers/errorHandler.js";

const postController = {
    getPosts: async (request, response) => {
        try {
            const posts = await postService.getPosts();
            response.status(200).json(posts);
        } catch (error) {
            errorHandler.handle(error)
        }
    },

    getPostById: async (request, response) => {
        try {
           postService.getPostById(request.params.id)
        } catch (error) {
            errorHandler.handle(error)
        }
    },

    updatePost: async (request, response) => {
        try {
           postService.updatePost(request.params.id, request.body)
        } catch (error) {
            errorHandler.handle(error)
        }
    },

    deletePost: async (request, response) => {
        try {
            postService.deletePost(request.params.id)
        } catch (error) {
            errorHandler.handle(error)
        }
    },
}

export default postController;