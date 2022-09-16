const {ContenedorArchivo} = require('../contenedores/contenedorArchivo.js')

class ProductosDaoArchivo extends ContenedorArchivo {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports = ProductosDaoArchivo
