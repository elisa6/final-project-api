const CommentService = require('./../services/comment.service')

class CommentController{
    constructor(){
        this.service = new CommentService
    }

    async index(){
        const comments = await this.service.getAll()
        return comments
    }

    async create(values){
        const comment = await this.service.create(values)
        return comment
    }

    async findOne(id){
        const comment = await this.service.findOne(id)
        if(!comment){
            throw new Error("Comment not found")
        }
        return comment
    }

    async update(id, values){
        const comment = await this.service.update(id, values)
        if (!comment){
            throw new Error("Comment not found")
        }
        return comment
    }

    async delete(id){
        const comment = await this.service.delete(id)
        if (!comment){
            throw new Error("Comment not found")
        }
        return comment
    }
}

module.exports = CommentController