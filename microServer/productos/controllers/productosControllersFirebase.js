const {response} = require('express')

const {ProductosFirebase} = require('./daos/ProductosDaoFirebase.js')

const productFireBase = new ProductosFirebase('./conexionBd/fireBaseConect.js')

const getProductos = async (req, res = response) => {
    try {
    const productos = await productFireBase.getAll()
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
    const producto = await productFireBase.getById(id)
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
        const producto = await productFireBase.updateById({id,title , price , thumbnail})
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
    const producto = await productFireBase.save({title, price, thumbnail})
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
    const producto = await productFireBase.deleteById(id)
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
    const productos = await productFireBase.deleteAll()
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