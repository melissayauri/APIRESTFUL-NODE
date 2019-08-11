const c = console.log,
mongoose = require('mongoose')
config = require('../config')

class Database{
    constructor(){
        this.connect()
    }
    connect(){
        mongoose.connect(process.env.URL_BD, {useNewUrlParser:true})
    .then(()=>c(`conexión exitosa al servidor de mongodb: ${process.env.URL_BD}`))
    .catch(err=>c(`error de conexión al servidor de BD: ${err.message}`))
    }
}

module.exports = new Database()