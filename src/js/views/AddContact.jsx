import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!contact.name) {
            alert("El nombre es obligatorio");
            return;
        }

        actions.addContact(contact.name || null, contact.email || null, contact.phone || null, contact.address || null);
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Añadir Contacto</h1>
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
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.address}
                        onChange={(e) => setContact({ ...contact, address: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Guardar Contacto</button>
            </form>
        </div>
    );
};

export default AddContact;
