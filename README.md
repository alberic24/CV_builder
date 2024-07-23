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

Key steps :
Creating and configuring React components:

Set up forms and reports to manage user input.
ing user input.
Configure HT navigation and queries.
PRACTICAL WORK.
Configuring Axios for security:

Inclusion of CSRF tokens to secure requests.
are.
Session cookie management.
Laravel backend implementation:

Creation of routes and controllers for user geometry.
user management.
Set up migrations for database structure.
 database structure.
Error handling and feedback messages to improve
improve user experience.





*** Example for example for the registration page
![Exemple d'image](assets/f.png)


*** Project overview

![Exemple d'image](assets/g.png)