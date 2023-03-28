import React from "react";

// function Header( props ){

//     // const edad= 20;

//     // let mensaje;

//     // edad >= 18 ? mensaje = 'Eres mayor de edad': mensaje = 'eres menor de edad';
//     console.log(props);
//     return (

//         // <h1 className="encabezado">{mensaje}</h1>
//         <h1  className="encabezado"> {props.titulo} </h1>
//     )
// }
function Header( {titulo} ){

    // const edad= 20;

    // let mensaje;

    // edad >= 18 ? mensaje = 'Eres mayor de edad': mensaje = 'eres menor de edad';
    // console.log(props);
    return (

        // <h1 className="encabezado">{mensaje}</h1>
        <h1  className="encabezado"> {titulo} </h1>
    )
}

export default Header