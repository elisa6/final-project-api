const { connectDB, disconnectDB } = require('../index');
const User = require('../models/user.model');
const UserService = require('../../services/user.service');

async function seedUsers() {
	try {

		const users = [
			{ name: 'Elisabet Castaño Salazar', age: 24, email: "elisabet@gmail.com", password: "Elisabet123" },
			{ name: 'Maria Eugenia Salazar', age: 57, email: "maria@gmail.com", password: "Maria123" }
		]

		userService = new UserService

		connectDB()

		users.map(async (u, index) => {
			await userService.create(u)
			if (index === users.length - 1) {
				console.log('Datos de usuarios insertados correctamente')
				disconnectDB()
			}
		})
	} catch (error) {
		console.error('Error al insertar datos de usuarios:', error)
	}
}

seedUsers()
