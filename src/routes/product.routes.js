const { Router } = require('express')
const ProductController = require('./../controllers/product.controller')
const router = Router()
const controller = new ProductController

// Create product
router.post('/', async (req, res) => {
    const product = await controller.create(req.body)
    res.status(201).json({product})
})

// Get all products
router.get('/', async (req, res) => {
    const products = await controller.index()
    res.status(200).json({products})
})

// Get a product
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product = await controller.findOne(id)
        res.status(200).json(product)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
})

// Update a product
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const values = req.body

    try {
        const product = await controller.update(id, values)
        res.status(200).json({product})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

// Delete a product
router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
        const product = await controller.delete(id)
        res.status(200).json({product})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

module.exports = router
