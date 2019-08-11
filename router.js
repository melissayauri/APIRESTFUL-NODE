const express = require('express'),
api = express.Router()

api.get('/', async(req,res)=>{
await res.status(200).send({
    message:'funcionando api restful de maratones con node.js y mongoDB'
})
})

module.exports= api