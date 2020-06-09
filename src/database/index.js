const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

// Model
const User = require('../model/User')

//Connection
const connnection = new Sequelize(dbConfig)
User.init(connnection)

module.exports = connnection