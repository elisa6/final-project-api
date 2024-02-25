const mongoose = require("mongoose")
const { dbURI } = require('../config/config')

// mongodb connection
function connectDB() {
	mongoose.connect(dbURI)
		.then(() => console.log("Connected"))
		.catch((error) => console.error(error))
}

function disconnectDB() {
	mongoose.disconnect()
		.then(() => console.log("Disconnected"))
		.catch((error) => console.error(error))
}

module.exports = { connectDB, disconnectDB }
