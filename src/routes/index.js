const { Router } = require('express')
const userRoutes = require("./user.routes")
const productRoutes = require("./product.routes")
const commentRoutes = require("./comment.routes")

function routerApi(app) {
	const router = Router()

	app.use('/api/v1', router)
	router.use('/users', userRoutes)
	router.use('/products', productRoutes)
	router.use('/comments', commentRoutes)
}

module.exports = routerApi
