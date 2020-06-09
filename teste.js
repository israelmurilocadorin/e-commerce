require('dotenv').config({path:'.env'})
const Sequelize = require('sequelize')
const sequelize =  new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, 
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql'                         
    });

const User = sequelize.define('user', {
    nome: {
        type: Sequelize.STRING 
    },
    senha: {
        type: Sequelize.STRING
    }
})


// const Imagens = sequelize.define('imagens', {
//     descricao: {
//         type: Sequelize.STRING
//     },
//     valor: {
//         type: Sequelize.DECIMAL(10, 2) 
//     },
//     base64Imagen: {
//         type: Sequelize.STRING
//     }
// })

const Product = sequelize.define('product', {
    nome: {
        type: Sequelize.STRING
    },
    valor: {
        type: Sequelize.DECIMAL(10, 2) 
    },
    categoria: {
        type: Sequelize.STRING(1)
    }
})


// User.sync({ force:true })
// Product.sync({ force:true })
// Imagens.sync({ force:true })

sequelize.authenticate()
    .then(() => {
        console.log('Connected database...')
    })
    .catch((e) => {
        console.error('error na conexão:', e)
    })

module.exports.sequelize