const userSchema = require("../database/models/user.model")

class UserService {
	constructor() {
		this.model = userSchema
	}

	async getAll() {
		const users = await this.model.find()
		return users
	}

	async create(values) {
		const user = await userSchema(values)
		return user.save().then((user) => user).catch((error) => error.errors)
	}

	async findOne(value) {
		const user = await this.model.findOne(value)
		return user
	}

	async findById(id) {
		const user = await this.findOne({ _id: id })
		return user
	}

	async findByEmail(email) {
		const user = await this.findOne({ email: email })
		return user
	}

	async update(id, values) {
		await this.model.findByIdAndUpdate(id, values)
		const userUpdated = this.findById(id)
		return userUpdated
	}

	async delete(id) {
		return await this.model.findByIdAndDelete(id);
	}
}

module.exports = UserService
