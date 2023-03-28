import React from 'react';

// const Footer = () => {
//     return();
// }

// export default Footer;

//palabra reservada sfc crea la estructura de una función en una constante.
// const Footer = () => {
//     return (

//          <footer>
//             <p>Todos los derechos reservados &copy;</p>
//          </footer>
//     );
// }
const Footer = ({fecha}) => (

         <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
         </footer>
);
 
export default Footer;

