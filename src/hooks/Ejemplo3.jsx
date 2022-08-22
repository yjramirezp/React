/**
 * Ejemplo Hokks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va atener un valor
 * que recibe el padre
 */

 const miContexto = React.createContext(null)


const Componente1 = () => {
    
    // Inicializamos un estado vacio que va a rellenarse con los
    // datos del contexto padre
    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componenete 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {
    
    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '123456',
        sesion: 1
    }

    // Creando el estado de este componenete
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'QWERTY!"#$%&',
                sesion: sessionData.sesion + 1
            }
        );
    }

    return (
        <miContexto.Provider value = {sessionData}>
            {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
            {/* Ademas, si se actualiza, los componenetes de aqui, tambien lo actualizan */}
            <h1>**** Ejemplo de useState y useContext ****</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sessoion</button>
        </miContexto.Provider>
    )
}

