/**
 * Ejemplo de componenete de tipo clase que dispone de los
 * metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componenete');
    }

    componentWillMount() {
        console.log('WillMount: Antes del montaje del componenete');

    }

    componentDidMount() {
        console.log('DidMount: Justo al del montaje del componenete, antes de renderizarlo');

    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props');

    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // return true / flase
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse');

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo despues de actualizarse');

    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer');

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;