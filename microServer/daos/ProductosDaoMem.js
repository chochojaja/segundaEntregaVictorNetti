const {ContenedorDB} = require('../contenedores/contenedorDb.js')

class ProductosDaoMem extends ContenedorDB {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports = ProductosDaoMem