const {ContenedorArchivo} = require('../contenedores/contenedorArchivo.js')

class CarritoDaoArchivo extends ContenedorArchivo {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports = CarritoDaoArchivo
