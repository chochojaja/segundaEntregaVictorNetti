const fs = require('fs');


class ContenedorFireBase {
    constructor(canal){
        this.canal = canal
        
    }
  



    async saveProducto(obj){
        try {
            let producto = new Productos ({obj})
            await Productos.save()
            return producto
        
           
        
        } catch (error) { console.log(error)            
        }  
        
    }

    async modificaProductoId(obj){
        try {
            let producto = {title,price,thumbnail }
            await Productos.updateOne({'id':'obj'}, {$set:{'title':producto.title,'price':producto.price,'thumbnail':producto.thumbnail}})
             
        } catch (error) { console.log(error)            
        }  
        
     }
  

    async traerProductos(){

    try{
        const productos = await Productos.find()
        return productos
            
       } catch {   (err => console.log(err))
         }
     }
    async deletAll(obj){
        try {
             await Productos.deleteOne({id: obj})
            console.log('productos eliminados')
        
            
        } catch (error) { console.log(error)            
        }  
        
    }




}
module.exports = {ContenedorFireBase}