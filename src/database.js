const mysql = require("mysql2")
const {DB_HOST, DB_PASSWORD, DB_NAME, DB_USER, DB_PORT} = require('./config')
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME,
    port: DB_PORT
})

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Conexión correcta");
    }
})

module.exports = connection;