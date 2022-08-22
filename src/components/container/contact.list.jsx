import React from 'react';
import { Contact } from '../../models/contact.class';
import { LEVELS } from '../../models/levels.enum';
import ContactComponect from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact ('Example', 'Lasta name', 'Email-Default', LEVELS.NOMARL, false)


    return (
        <div>
            <div>
                <h1>
                    Your Contact:
                </h1>
            </div>
            {/* TODO: Aplciar un for/map para renderizar una lista  */}
            <ContactComponect contact = {defaultContact} ></ContactComponect>
        </div>
    );
};


export default ContactListComponent;
