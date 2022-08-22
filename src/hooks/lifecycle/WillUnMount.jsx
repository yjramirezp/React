/**
 * Ejemplo de uso del metodo comopentWillunMount para componente clase
 * Ejemplo de uso del hook para compoenente funcional
 * (Cuadno el compoennte va a desaparecer)
 * 
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezcda');
    }

    render() {
        return (
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        );
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezcda');

        };
    }, []);

    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
}



