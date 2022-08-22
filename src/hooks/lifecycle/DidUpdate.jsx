/**
 * Ejemplo de uso de metodo comopentDidUpdate en comopennte de clase
 * ysuo de hook comopnente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('Comportamiento cuando el comopnenete recibe nuevos props o cambio en su estado');
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el comopnenete recibe nuevos props o cambio en su estado');

        
    })

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


