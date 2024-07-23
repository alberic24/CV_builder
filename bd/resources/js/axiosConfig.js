// axiosConfig.js

import axios from 'axios';

// Configuration Axios pour inclure le token CSRF
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found');
}

// Ajout pour permettre les cookies entre les requêtes
axios.defaults.withCredentials = true;

export default axios;
