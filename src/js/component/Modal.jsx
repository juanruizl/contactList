import React from 'react';


const DeleteConfirmationModal = ({ contactName, onConfirm, onCancel }) => {
    return (
        <div className="modal show" style={{ display: 'block' }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmar Eliminación</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onCancel}></button>
                    </div>
                    <div className="modal-body">
                        <p>¿Estás seguro que deseas eliminar a {contactName}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
                        <button type="button" className="btn btn-danger" onClick={onConfirm}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
