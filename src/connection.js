const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'root', 
    database: ''
});

connection.connect(function(err){
    if(err) return console.log(err);
    console.log('Conectado! xD');
})
