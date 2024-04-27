
class QueuePosts {
    constructor() {
        this.queue = [];
    }
    
    addPost(post) {
        this.queue.push(post);
    }
    
    removePost() {
        return this.queue.shift();
    }

    isEpmty() {
        return this.queue.length === 0;
    }
    
    getPosts() {
        return this.queue;
    }
}

export default new QueuePosts();