import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (password !== passwordConfirmation) {
            newErrors.password_confirmation = 'Passwords do not match';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            await axios.post('/register', {
                username,
                password,
                password_confirmation: passwordConfirmation,
                email,
                profession
            });

            setLoading(false);
            // Clear the form on successful registration
            setUsername('');
            setPassword('');
            setPasswordConfirmation('');
            setEmail('');
            setProfession('');
            navigate('/login'); // Redirection vers la page de connexion après inscription réussie
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    return (
        <div className='mains'>
            <div className="App">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                    {errors.username && <p className="text-danger">{errors.username}</p>}
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                    <br />
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />
                    </label>
                    {errors.password_confirmation && <p className="text-danger">{errors.password_confirmation}</p>}
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                    <br />
                    <label>
                        Profession:
                        <input
                            type="text"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            required
                        />
                    </label>
                    {errors.profession && <p className="text-danger">{errors.profession}</p>}
                    <br />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
