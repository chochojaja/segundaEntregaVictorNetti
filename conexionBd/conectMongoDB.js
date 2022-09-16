const mongoose = require('mongoose')

const connectBD = async () =>{
    try {
        const url = 'mongodb://localhost:27017/ecommerce'
        await mongoose.connect(url, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('mongoDb connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectBD