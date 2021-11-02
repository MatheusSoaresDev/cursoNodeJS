const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: '213.190.6.85',
    user: 'u940287720_mathsilva',
    password: '6n/+Ca~K',
    database: 'u940287720_petshop'
})

module.exports = conexao