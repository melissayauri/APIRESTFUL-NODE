const mongoose = require('mongoose'),

Schema = mongoose.Schema,
MarathonSchema = new Schema({
    name:{
        type: String,
        required:[true, 'el nombre del maratón es requerido']
    },
    country:{
        type: Schema.Types.ObjectId,
        ref:'Country',
        required:[true, 'el país donde se realiza el maratón es requerido']
    },
    location:{
        type: String,
        required:[true, 'el lugar del maratón es requerido']
    },
    altitude: Number,
    race_web:{
        type:String,
        lowercase:true,
    },
    race_logo:String,
    race_since:String,
    race_day:String,
    race_date:Date,
    race_type:{
        type:String,
        enum:['City','Trail'],
        default:'City'
    },
    distance:{
        type:Number,
        min:42.195,
        default:42.195
    },
    resume: String

    

    
   
/*name
country
location
altitude
race_web
race_logo
race_since
race_day
race_date
race_type
distance
resume
*/
})

// mongodb va a pluralizarlo y ponerlo en minusculo el modelo
module.exports= mongoose.model('Marathon', MarathonSchema)