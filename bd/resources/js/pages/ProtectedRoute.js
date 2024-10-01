// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './useAuth'; // Assurez-vous que le chemin est correct

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = useAuth(); // Vérifiez l'état d'authentification

    return isAuthenticated ? (
        <Component {...rest} />
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
