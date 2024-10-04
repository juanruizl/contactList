import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home.jsx';
import AddContact from './views/AddContact.jsx';
import EditContact from './views/EditContact.jsx';
import ContactList from './views/ContactList.jsx';  
import injectContext from './store/appContext';
import Navbar from './component/Navbar.jsx';    


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-contact" element={<AddContact />} />
                <Route path="/edit-contact/:id" element={<EditContact />} />
                <Route path="/contact-list" element={<ContactList />} /> 
            </Routes>
        </Router>
    );
};

export default injectContext(App);

