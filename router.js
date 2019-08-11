const express = require('express'),
Country = require('./routes/country'),
Marathon = require('./routes/marathon')
api = express.Router()

api.get('/', async(req,res)=>{
await res.status(200).send({
    message:'funcionando api restful de maratones con node.js y mongoDB'
})
})
api.post('/countries',Country.postCountries)
api.get('/countries',Country.getCountries)
api.get('/marathons',Marathon.getMarathons)
api.post('/marathon',Marathon.postMarathon)
// buscarlo y luego actualizarlo
api.get('/marathon/:id',Marathon.getMarathon)
api.put('/marathon/:id',Marathon.putMarathon)
// eliminarlo
api.delete('/marathon/:id',Marathon.deleteMarathon)


module.exports= api