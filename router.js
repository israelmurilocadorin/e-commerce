
const { Router } = require('express')
const routes = Router()

const UserController = require('./src/controller/UserController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

module.exports = routes