
My resume builder application named Cv Builder includes several key components to manage user login, registration, and resume information management. Here's a summary of the steps and elements needed to set up this application, focusing on user login management and the backend.

Frontend
Installation and Initial Configuration:

Use of React to create the application components.
Use of react-router-dom for navigation between the application's various pages.
Use of Axios to make HTTP requests to the Laravel backend.

Key components :

*Login.jsx:

Login form with status management for email, password, errors and loading.
Sends login information via POST request to endpoint /login.
Management of responses and redirection to the CVInfos page if the connection is successful.

*RegisterForm.jsx :

Registration form for new users.

*Header.jsx :

Application header with navigation links.
CVInfos.jsx and CVTemplates.jsx:
Pages for managing CV information and selecting CV templates.
Axios configuration :

Axios configuration to include CSRF token in request headers.
Enable cookies between requests to manage sessions.
Backend

Laravel installation and configuration:

Creation of a Laravel project to manage the application backend.
Configuration of routes and controllers for various operations (connection, registration, etc.).
Database :

Creation of the migration for the users table with the necessary columns, including api_token for authentication tokens.
LoginController:

Input validation :
Check email and password fields to ensure they are present and valid.
User authentication:
Check user existence and match password.
Creation and saving of a personalized API token for the user.
Response Management :
Return appropriate error messages in the event of validation or failed authentication.
Return of user and token information in the event of success.
Migration to Add api_token column:

Added api_token column to users table to manage authentication tokens.
Fixed errors linked to missing columns (e.g. remember_token).

Étapes Clés :
Création et Configuration des Composants React :

Mise en place des formulaires et des états pour gérer les entrées utilisateur.
Configuration de la navigation et des requêtes HTTP.
Configuration d'Axios pour la Sécurité :

Inclusion des tokens CSRF pour sécuriser les requêtes.
Gestion des cookies pour les sessions.
Implémentation du Backend Laravel :

Création des routes et des contrôleurs pour la gestion des utilisateurs.
Mise en place des migrations pour la structure de la base de données.
Gestion des erreurs et des messages de retour pour améliorer l'expérience utilisateur.
