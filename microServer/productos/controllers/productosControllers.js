const {response} = require('express')

const {ProductosDaoArchivo} = require('./daos/ProductosDaoArchivo.js')

const productos = new ProductosDaoArchivo('./producto.txt')

const getProductos = async (req, res = response) => {
    try {
    const traerProductos = await productos.getAll()
    res.json({
        traerProductos
    })
    } catch (error) {
        console.log(error)
    }
}
const getProductosById = async (req, res = response) =>{
    try {
    const {id} =req.params
    const producto = await productos.getById(id)
    res.json({
        producto
    })
    } catch (error) {
        console.log(error)    
    }
}
const putProducto = async (req, res = response) =>{
    try {  
    const {id} = parseInt(req.params.id)
    const {  title, price, thumbnail} = req.body
    if (title && price && thumbnail){
        const producto = await productos.updateById({id,title , price , thumbnail})
        res.json({
            msg:'producto actualizado',
            producto
        })
    } } catch (error) {
        console.log(error)   
    }

}
const postProductos = async(req, res = response) => {
    try {
    const {title, price, thumbnail}= req.body
    if (title && price && thumbnail){
    const producto = await productos.save({title, price, thumbnail})
    res.json({
        msg:'producto guardado',
        producto
    })
   }  } catch (error) {
        console.log(error)
}
}
const deleteProducto = async (req, res = response)=> {
    try {
    const {id} = parseInt(req.params.id)
    const producto = await productos.deleteById(id)
    res.json({
        msg:'producto eliminado',
        producto
    })
 } catch (error) {
        console.log(error)
    }
}
const deleteAllProductos = async (req, res = response)=> {
    try {
    const elimProductos = await productos.deleteAll()
    res.json({
        msg:'todos los productos se eliminaron',
        elimProductos
    })
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getProductos,
    getProductosById,
    putProducto,
    postProductos,
    deleteProducto,
    deleteAllProductos

}