'use strict';

const mongoose = require('mongoose'),

Schema = mongoose.Schema
//DeprecationWarning: collection.ensureIndex is deprecated.
mongoose.set('useCreateIndex', true)
const CountrySchema = new Schema({
    code:{
        type:String,
        required:[true, 'el código del país es requerido'],
        unique:true
    },
    name:{
        type:String,
        required:[true, 'el nombre del país es requerido'],
        unique:true
    }
/*code
name
*/
})

// mongodb va a pluralizarlo y ponerlo en minusculo el modelo
module.exports= mongoose.model('Country', CountrySchema)