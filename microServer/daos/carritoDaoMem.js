const {ContenedorDB} = require('../contenedores/contenedorDb.js')

class CarritoDaoMem extends ContenedorDB {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports = CarritoDaoMem
