
const { Router } = require('express')
const routes = Router()

const UserController = require('./src/controller/UserController')
const ProductController = require('./src/controller/ProductController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/product', ProductController.index)
routes.post('/product', ProductController.store)

module.exports = routes