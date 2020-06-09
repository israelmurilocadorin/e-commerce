const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

// Model
const User = require('../model/User')
const Product = require('../model/Product')

//Connection
const connnection = new Sequelize(dbConfig)

Product.init(connnection)
User.init(connnection)

module.exports = connnection