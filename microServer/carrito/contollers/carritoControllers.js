const { response } = require('express')

const {CarritoDaoArchivo} = require('./daos/CarritoDaoArchivo.js')

const carritoProductos = new CarritoDaoArchivo('./producto.txt')

const getCart = async (req, res= response) => {
    try {
    const productos = await carritoProductos.getAll()
    res.json({
        msg: 'productos en el carrito',
        productos
    })
        } catch (error) {
            console.log(error)
     }
}

const postCart = async(req, res= response) => {
   try {
    const {title, price, thumbnail}= req.body
    if (title && price && thumbnail){
    const producto = await carritoProductos.save({title, price, thumbnail})
    res.json({
        msg: 'producto en el carrito',
        producto
    })
        }
         } catch (error) {
            console.log(error)
        }
}


const deleteCart = async (req, res= response) => {
try {
    const {id} = parseInt(req.params.id)
    const producto = await carritoProductos.deleteById(id)
    res.json({
        msg:'producto eliminado del carrito',
        producto
    })
} catch (error) {
    console.log(error)
    }
}


const putCart = async (req, res= response) => {
    try {
    const {id} = parseInt(req.params.id)
    const {  title, price, thumbnail} = req.body
    if (title && price && thumbnail){
        const producto = await carritoProductos.updateById({id,title , price , thumbnail})
        res.json({
            msg:'producto actualizado en el carrito',
            producto
        })
    }  } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getCart,
    postCart,
    deleteCart,
    putCart    
}
