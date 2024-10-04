import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="mb-4">Menú Principal</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4 ">
                        <h2 className="mb-4">Opciones</h2>
                        <Link to="/add-contact" className="btn btn-success btn-lg  mb-3">
                            Añadir Contacto
                        </Link>
                        <Link to="/contact-list" className="btn btn-primary btn-lg w-100">
                            Ver Lista Completa de Contactos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
