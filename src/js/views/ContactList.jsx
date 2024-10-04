import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import ContactCard from '../component/ContactCard.jsx';

const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, [actions]);

    return (
        <div className="container">
            <h1 className="my-4 text-center">Lista de Contactos</h1>
            <div className="row">
                {store.contacts?.length > 0 ? (
                    store.contacts.map(contact => (
                        <div className="col-lg-4 col-md-6 mb-4" key={contact.id}>
                            <ContactCard contact={contact} />
                        </div>
                    ))
                ) : (
                    <p className="text-center">No hay contactos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ContactList;
