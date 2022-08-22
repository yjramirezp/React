/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>**** Ejemplo de CHILDREN PROPS ****</h1>
            <h2>
                Nombres: { props.nombre }
            </h2>
            {/* props.children pintara por defecto aqyello se encuentre entre las etiquetas de paertura y cierre de ese componenete desde el componenete de orden superior */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
