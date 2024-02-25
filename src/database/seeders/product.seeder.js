const { connectDB, disconnectDB } = require('../index');
const Product = require('../models/product.model');
const ProductService = require('../../services/product.service');
const UserService = require('../../services/user.service');

async function seedProducts() {
  try {
    await connectDB()

    userService = new UserService
    seller = await userService.findByEmail("elisabet@gmail.com")

    const products = [
      { name: 'Pijama', description: "Azul", price: 24000, category: "Moda", quantity: "123", seller: seller.id },
      { name: 'Cobija', description: "Morada", price: 104000, category: "Hogar", quantity: "23", seller: seller.id }
    ]

    productService = new ProductService

    products.map(async (p, index) => {
      await productService.create(p)
      if (index === products.length - 1) {
        console.log('Datos de productos insertados correctamente')
        disconnectDB()
      }
    })
  } catch (error) {
    console.error('Error al insertar datos de productos:', error)
  }
}

seedProducts()
