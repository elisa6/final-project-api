const { Router } = require('express')
const UserController = require('./../controllers/user.controller')
const router = Router()
const controller = new UserController

// Create user
router.post('/', async (req, res) => {
    const user = await controller.create(req.body)
    res.status(201).json({user})
})

// Get all users
router.get('/', async (req, res) => {
    const users = await controller.index()
    res.status(200).json({users})
})

// Get an user
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await controller.findOne(id)
        res.status(200).json(user)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
})

// Update an user
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const values = req.body

    try {
        const user = await controller.update(id, values)
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

// Delete an user
router.delete('/:id', async (req, res) => {
	const { id } = req.params
	try {
        const user = await controller.delete(id)
        res.status(200).json({user})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

module.exports = router
