const {ContenedorFireBase} = require('../contenedores/contenedorFireBase.js')

class ProductosFirebase extends ContenedorFireBase {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports = ProductosFirebase