import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setGeneralError('');
        setErrors({});  // Réinitialiser les erreurs à chaque soumission
        try {
            const response = await axios.post('/login', {
                email,
                password
            });

            setEmail('');
            setPassword('');

            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/cv-infos');
            }
        } catch (error) {
            setLoading(false);
            if (error.response) {
                if (error.response.status === 419) {
                    setGeneralError('Session expired. Please refresh the page and try again.');
                } else if (error.response.data.errors) {
                    setErrors(error.response.data.errors);
                } else if (error.response.data.message) {
                    setGeneralError(error.response.data.message);
                }
            } else {
                console.error('Unexpected error:', error);
                setGeneralError('Une erreur inattendue est survenue.');
            }
        }
    };

    return (
        <div className='mains'>
            <div className="App">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {generalError && <p className="text-danger">{generalError}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;
