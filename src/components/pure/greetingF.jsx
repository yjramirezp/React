import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Introduccion a useState
    const [age, setage] = useState(22);

    const birthday = () => {
        // Actualizamos el state
        setage(age + 1)
    }


    return (
        <div>
            <h1>
                Hola!! { props.name} desde elemento function
            </h1>
            <h2>
                Tu edad es: { age }
            </h2>
            <div>
                <button onClick={ birthday }>
                    Cumplir años
                </button>
        </div>
    </div>
);
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
