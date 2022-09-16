const {ContenedorMongoDB} = require('../contenedores/contenedormongoDB.js')

class CarritoDaoMongoDB extends ContenedorMongoDB {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports = CarritoDaoMongoDB
