import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import RegisterForm from './pages/RegisterForm';
import Login from './pages/Login';
import CVInfos from './pages/CVInfos';
import CVTemplates from './pages/CVTemplates';
import FillCV from './pages/FillCV';
import FillCV2 from './pages/FillCV2';
import FillCV3 from './pages/FillCV3';

ReactDOM.createRoot(document.getElementById('app')).render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/cv-infos" element={<CVInfos />} />
            <Route path="/cv-templates" element={<CVTemplates />} />
            <Route path="/fill-cv/:templateId" element={<FillCV />} />
            <Route path="/fill-cv2/:templateId" element={<FillCV2 />} />
            <Route path="/fill-cv3/:templateId" element={<FillCV3 />} />
        </Routes>
    </Router>
);
