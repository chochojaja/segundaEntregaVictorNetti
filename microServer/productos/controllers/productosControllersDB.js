const {response} = require('express')

const {ProductosDaoMongoDB} = require('./daos/productosDaoMongoDB.js')

const productosDB = new ProductosDaoMongoDB('./conexionBd/conectMongoDB.js')

const getProductos = async (req, res = response) => {
    try {
    const productos = await productosDB.getAll()
    res.json({
        productos
    })
    } catch (error) {
        console.log(error)
    }
}
const getProductosById = async (req, res = response) =>{
    try {
    const {id} =req.params
    const producto = await productosDB.getById(id)
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
        const producto = await productosDB.updateById({id,title , price , thumbnail})
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
    const producto = await productosDB.save({title, price, thumbnail})
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
    const producto = await productosDB.deleteById(id)
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
    const productos = await productosDB.deleteAll()
    res.json({
        msg:'todos los productos se eliminaron',
        productos
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