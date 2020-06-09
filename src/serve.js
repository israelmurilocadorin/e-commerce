const express = require('express')
const routes = require('../router.js')

require('./database')

const app = express()

app.use(express.json());
app.use(routes);

app.listen(3333,() => {
    console.log('Servidor back end rodando na porta 3333...')
});


