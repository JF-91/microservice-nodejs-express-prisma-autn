import { request, response } from "express";


const postController = {
    getPosts: async (request, response) => {
        try {
            const posts = await postService.getPosts();
            response.status(200).json(posts);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },

    getPostById: async (request, response) => {
        try {
            const { id } = request.params;
            const post = await postService.getPostById(id);
            response.status(200).json(post);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },

    updatePost: async (request, response) => {
        try {
            const { id } = request.params;
            const post = request.body;
            const updatedPost = await postService.updatePost(id, post);
            response.status(200).json(updatedPost);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },

    deletePost: async (request, response) => {
        try {
            const { id } = request.params;
            await postService.deletePost(id);
            response.status(200).json({ message: "Post deleted successfully" });
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    },
}

export default postController;