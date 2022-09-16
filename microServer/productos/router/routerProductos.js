const express = require('express')
const{getProductos, getProductosById, postProductos, putProducto, deleteProducto, deleteAllProductos}= require('./microServer/productos/controllers/productosControllers.js')



const {Router} = express

const routerProductos = Router()

routerProductos.get('/',getProductos)
routerProductos.get('/:id', getProductosById)
routerProductos.post('/',postProductos)
routerProductos.put('/:id',putProducto)
routerProductos.delete('/;id',deleteProducto)
routerProductos.delete('/',deleteAllProductos)

module.exports = routerProductos