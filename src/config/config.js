require ('dotenv').config()

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.APP_PORT || 9000,
    dbURI: process.env.DB_URI
}

module.exports = config