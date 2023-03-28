import logo from './logo.svg';
import './App.css';

import React,{ Fragment, useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  
  //crear listado de productos.
  const [ productos, guardarProductos ] = useState(
    [
      {
        id: 1,
        nombre: 'camisa reactjs',
        precio: 50
      },
      {
        id: 2,
        nombre: 'camisa vuejs',
        precio: 40
      },
      {
        id: 3,
        nombre: 'camisa node js',
        precio: 30
      },
      {
        id: 4,
        nombre: 'camisa angular',
        precio: 20
      },
    ]
  );

  //state para el carrito de compras, el segundo parámetro es una función que interactuará con el carrito.
  const [ carrito, agregarProducto] = useState([]);

  //get fecha.
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      
      <Header 
        titulo = "Tienda Virtual"
        numero = "20" 
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (

        <Producto 
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          //se incluye el state.
          productos = {productos}
          agregarProducto = {agregarProducto}
        />
      ))}

      <Carrito 
        carrito = {carrito}
      />
      <Footer
        fecha = {fecha}
      />
    </Fragment>  
    
  );
}

export default App;
