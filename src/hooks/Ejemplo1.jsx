//  Ejemplo de uso del hook useState
// Crear un componenente de tipo funcion y acceder a su estado
//  privado a traves de un hook y, ademas, poder modificarla

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;


    // Valor inicial para una persona
    const personaInicial = {
        nombre : "Lucas",
        email : 'email@email.com'
    }

    /*
    * Queremos que el VALORINICial y PERSONAINICIAL sean
    * parte del estado del componente para asi poder gestionar su cambio
    * * y que este se vea reflejado en la vista del componenete
    * 
    * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */
    
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    

    /**
     * Funcion para axtualizar el estado privado que continene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }




    /**
     * Funcion para actualizar el estado de persona en el componenete
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pedro',
                email: 'Yoyo@yoyomail.com'
            }
        )
    }



    return (
        <div>
            <h1>
                **** Ejemplo de useState ****
            </h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2>
                DATOS DE LA PERSONA
            </h2>
            <h3>
                NOMBRE: {persona.nombre}
            </h3>
            <h4>
                EMAIL: {persona.email}
            </h4>
            {/* Bloque de botones para actualizar ele stado del componenetes */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Incrementar Persona</button>

        
        </div>
    );
}

export default Ejemplo1;
