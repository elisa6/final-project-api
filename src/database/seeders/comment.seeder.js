const { connectDB, disconnectDB } = require('../index');
const Comment = require('../models/comment.model');
const CommentService = require('../../services/comment.service');
const UserService = require('../../services/user.service');
const ProductService = require('../../services/product.service');

async function seedComment() {
  try {
    await connectDB()

    userService = new UserService
    author = await userService.findByEmail("maria@gmail.com")

    productService = new ProductService
    product = await productService.findByName("Pijama")

    comment = { content: 'Pijama muy bonita', author: author.id, product: product.id }

    commentService = new CommentService
    await commentService.create(comment)
    console.log("Comentario insertado")
    disconnectDB()
  } catch (error) {
    console.error('Error al insertar datos de comentarios:', error)
  }
}

seedComment()
