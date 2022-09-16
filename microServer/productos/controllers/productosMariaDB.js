const { response } = require('express')

const {ProductosDaoMem} = require('./daos/CarritoDaoMem.js')

const productosMB = new ProductosDaoMem('./conexionBd/bdConect.js')

const getCart = async (req, res= response) => {
    try {
    const productos = await productosMB.getAll()
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
    const producto = await productosMB.save({title, price, thumbnail})
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
    const producto = await productosMB.deleteById(id)
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
        const producto = await productosMB.updateById({id,title , price , thumbnail})
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
