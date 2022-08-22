import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponect = ( {contact} ) => {
    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h3>
                Last name: { contact.last_name }
            </h3>
            <h3>
                Email: { contact.email }
            </h3>
            <h4>
                Level: { contact.level }
            </h4>
            <h5>
                This task is: { contact.connected ? 'Contacto En Línea':'Contacto No Disponible' }
            </h5>

        </div>
    );
};


ContactComponect.propTypes = {
    contact: PropTypes.instanceOf( Contact )
};


export default ContactComponect;
