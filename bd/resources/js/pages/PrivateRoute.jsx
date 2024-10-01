import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from './useAuth'; // Assurez-vous que le chemin est correct

const PrivateRoute = ({ element: Component, ...rest }) => {
    const isAuthenticated = useAuth(); // Vérifie si l'utilisateur est connecté

    return (
        <Route 
            {...rest} 
            element={isAuthenticated ? Component : <Navigate to="/login" replace />}
        />
    );
}

export default PrivateRoute;
