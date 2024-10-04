import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationModal from './Modal.jsx';

const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleDelete = () => setIsModalOpen(true);

    const confirmDelete = () => {
        actions.deleteContact(contact.id);
        setIsModalOpen(false);
    };

    const cancelDelete = () => setIsModalOpen(false);

    const handleEdit = () => navigate(`/edit-contact/${contact.id}`);

    return (
        <div className="card mb-4 shadow-sm" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2024/03/05/13/13/robot-8614567_960_720.png" className="img-fluid rounded-start" alt="Contacto" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text">
                            <span className="fw-bold">Email:</span> <span className="fst-italic">{contact.email}</span>
                        </p>
                        <p className="card-text">
                            <span className="fw-bold">Teléfono:</span> <span className="fst-italic text-primary">{contact.phone}</span>
                        </p>
                        <p className="card-text">
                            <span className="fw-bold">Dirección:</span> <span className="fst-italic">{contact.address}</span>
                        </p>
                        <button className="btn btn-danger me-2" onClick={handleDelete}>Eliminar</button>
                        <button className="btn btn-primary" onClick={handleEdit}>Editar</button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <DeleteConfirmationModal
                    contactName={contact.name}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </div>
    );
};

export default ContactCard;
