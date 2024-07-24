import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import RegisterForm from './pages/RegisterForm';
import Login from './pages/Login';
import CVInfos from './pages/CVInfos';
import CVTemplates from './pages/CVTemplates';

ReactDOM.createRoot(document.getElementById('app')).render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/cv-infos" element={<CVInfos />} />
            <Route path="/cv-templates" element={<CVTemplates />} />
        </Routes>
    </Router>
);
