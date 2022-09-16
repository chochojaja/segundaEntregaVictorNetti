const mongoose = require('mongoose')

const connectFire = async () =>{
    try {
        const url = 'mongodb+srv://DanielGrant:DanielGrant@cluster0.nw6l3y0.mongodb.net/test'
        await mongoose.connect(url, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('mongoDb connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectFire