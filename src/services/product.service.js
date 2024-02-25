const productSchema = require("../database/models/product.model")

class ProductService {
	constructor() {
		this.model = productSchema
	}

	async getAll() {
		const products = await this.model.find().populate('seller')
		return products
	}

	async create(values) {
		const product = await productSchema(values)
		return product.save().then((product) => product).catch((error) => error.errors)
	}

	async findOne(value) {
		const product = await this.model.findOne(value).populate('seller')
		return product
	}

	async findById(id) {
		const product = await this.findOne({ _id: id })
		return product
	}

	async findByName(name) {
		const product = await this.findOne({ name: name })
		return product
	}

	async update(id, values) {
		await this.model.findByIdAndUpdate(id, values)
		const productUpdated = this.findById(id)
		return productUpdated
	}

	async delete(id) {
		return await this.model.findByIdAndDelete(id);
	}
}

module.exports = ProductService
