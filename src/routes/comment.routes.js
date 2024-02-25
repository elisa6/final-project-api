const { Router } = require('express')
const CommentController = require('./../controllers/comment.controller')
const router = Router()
const controller = new CommentController

// Create comment
router.post('/', async (req, res) => {
	const comment = await controller.create(req.body)
	res.status(201).json({ comment })
})

// Get all comments
router.get('/', async (req, res) => {
	const comments = await controller.index()
	res.status(200).json({ comments })
})

// Get a comment
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params
		const comment = await controller.findOne(id)
		res.status(200).json(comment)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
})

// Update a comment
router.put('/:id', async (req, res) => {
	const { id } = req.params
	const values = req.body

	try {
		const comment = await controller.update(id, values)
		res.status(200).json({ comment })
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
})

// Delete a comment
router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const comment = await controller.delete(id)
		res.status(200).json({ comment })
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
})

module.exports = router
