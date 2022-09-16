const {ContenedorMongoDB} = require('../contenedores/contenedormongoDB.js')

class ProductosDaoMongoDB extends ContenedorMongoDB {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports =  ProductosDaoMongoDB 
