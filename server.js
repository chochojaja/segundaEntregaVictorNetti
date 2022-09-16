const {response} = require('express')

const express = require('express')
const {Server : HttpServer} = require('http')
const{Server : Ioserver} = require('socket.io')

const routerProductos = require('./microServer/productos/router/routerProductos.js')
const routerCarrito = require('./microServer/carrito/router/routerCarrito.js')

const { Knex } = require('knex')
const {conexion} = require('./conexionBd/bdConect') 
const knex = require ('knex')(conexion)


const app = express()

const httpServer = new HttpServer (app)
const io = new Ioserver(httpServer)

const PORT= process.env.PORT ||8080

app.use(express.static('public'))
app.use(express.json())
app.use(express.static('file'))
app.use(express.urlencoded({ extended : true })) 


app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)


httpServer.listen(PORT, error =>{
    if (error) throw error
    console.log(`servidor escuchando en el puerto ${PORT}`)
})