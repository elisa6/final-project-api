const commentSchema = require("../database/models/comment.model")

class CommentService {
	constructor() {
		this.model = commentSchema
	}

	async getAll() {
		const comments = await this.model.find().populate('author').populate('product')
		return comments
	}

	async create(values) {
		const comment = await commentSchema(values)
		return comment.save().then((comment) => comment).catch((error) => error.errors)
	}

	async findOne(id){
		const comment = await this.model.findById(id).populate('author').populate('product')
		return comment
	}

	async update(id, values){
		await this.model.findByIdAndUpdate(id, values)
		const commentUpdated = this.findOne(id)
		return commentUpdated
	}

	async delete(id){
		return await this.model.findByIdAndDelete(id);
	}
}

module.exports = CommentService
