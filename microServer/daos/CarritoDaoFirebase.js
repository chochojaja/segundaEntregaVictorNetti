const {ContenedorFireBase} = require('../contenedores/contenedorFireBase.js')

class CarritoFirebase extends ContenedorFireBase {
    constructor(){
        super('./microServer/productos/producto.txt')
    }
}

module.exports = CarritoFirebase