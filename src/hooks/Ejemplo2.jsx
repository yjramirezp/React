/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect)
 */
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a crear dos contadores distintos
    // Cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0); 

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function Incrementar1(){
        setContador1(contador1 + 1);
    }

    function Incrementar2(){
        setContador2(contador2 + 1);
    }

    /**
     * TRabajando con UseEffect
     */

    /**
     * ? Caso 1; Ejecutar SIEMPRE un snipet de codigo
     * cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENETE');
    //     console.log('Mostrando referencia a elemento del DOM');
    //     console.log(miRef);

    // })

    /**
     * ? Caso2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habra ejecucion
     */

    //     useEffect(() => {
    //         console.log('CAMBIO EN EL ESTADO DEL CONTADOR');
    //         console.log('Mostrando referencia a elemento del DOM');
    //         console.log(miRef);

    // }, [contador1]);

    /**
     * ? Caso2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);

    }, [contador1, contador2]);




    return (
        <div>
            <h1>
                **** Ejemplo de useState(), useRef() y useEffect() ****
            </h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento refrenciado
            </h4>
            <div>
                <button onClick={Incrementar1}>Incrementar contador 1</button>
                <button onClick={Incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
