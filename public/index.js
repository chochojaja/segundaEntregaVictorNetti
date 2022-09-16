

const server = io().connect()

const render = (productos) => {
    let listado = document.querySelector('#listado')
    let html = productos.map(prod => {
        return `<li>
            <strong>Nombre: ${prod.title}</strong>
            <em>Precio: ${prod.price}</em>
        </li>`
    })
    listado.innerHTML = html.join(' ')
}

const addProduct= (evt) => {
    const title = document.querySelector('#title').value
    const price = document.querySelector('#price').value

    const producto = {title, price}
    console.log(producto)
    server.emit('producto-nuevo', producto, (id)=>{
       // console.log(id)
    })
    return false
}


server.on ('mensaje_servidor', mensaje => {
    render('mensaje_servidor',mensaje)
})