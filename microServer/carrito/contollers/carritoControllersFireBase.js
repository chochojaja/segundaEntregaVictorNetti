const {response} = require('express')

const {CarritoFirebase} = require('./daos/carritoDaoFirebase.js')

const carFireBase = new CarritoFirebase('./conexionBd/fireBaseConect.js')

const getProductos = async (req, res = response) => {
    try {
    const productos = await carFireBase.getAll()
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
    const producto = await carFireBase.getById(id)
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
        const producto = await carFireBase.updateById({id,title , price , thumbnail})
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
    const producto = await carFireBase.save({title, price, thumbnail})
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
    const producto = await carFireBase.deleteById(id)
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
    const productos = await carFireBase.deleteAll()
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