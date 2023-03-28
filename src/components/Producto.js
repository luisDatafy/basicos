import React from 'react'
//se llaman a los states y funciones creados en app.js 
const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;
    
    //Agregar producto al carrito
    const seleccionarProducto = id => {

        const producto = productos.filter(producto => producto.id === id)[0];

        agregarProducto([
            ...carrito,
            producto
        ]);
        // agregarProducto(producto);
        // console.log(producto);
        // console.log('comprando... ', id);
    }
    return ( 
    <div>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        {/* al hacer click imprime en consola comprando */}
        <button 
            type = 'button'
            onClick = { () => seleccionarProducto(id) }
        >
            Comprar
        </button>
    </div> 
    );
}
 
export default Producto;