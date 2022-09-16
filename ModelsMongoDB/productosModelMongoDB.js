const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        max: 50
    },
    price:{
        type: number,
        required: true,
        max: 100,
        unique: true
    },
    thumbnail:{
        type: String,
        required: true,
        max: 50,
        trim:true
    }
})  
module.exports = mongoose.model('Productos',ProductoSchema)