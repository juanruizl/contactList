import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        if (store.contacts.length === 0) {
            actions.getContacts();
        }
        const foundContact = store.contacts.find(c => c.id === parseInt(id));
        if (foundContact) setContact(foundContact);
    }, [id, store.contacts, actions]);

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateContact(contact.name, contact.email, contact.phone, contact.address, id);
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Editar Contacto</h1>
            <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.address}
                        onChange={(e) => setContact({ ...contact, address: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditContact;
