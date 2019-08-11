const Country = require('../models/country')
fs = require('fs')

const postCountries = async(req, res)=>{
const countries = JSON.parse(fs.readFileSync('./models/countries.json', 'utf-8'))
await Country.insertMany(countries,(err,data)=>{
    if(err){
        res.status(500).send({
            message:`error interno del servidor${err.message}`
        })
    }else{
      res.status(200).send({data})  
    }
})
}

const getCountries = async(req, res)=>{

}

module.exports={
    postCountries,
    getCountries
}