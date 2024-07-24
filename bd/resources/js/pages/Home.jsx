import React from 'react';
import Header from './Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <section className="home-image-section">
                
            </section>
            <section className="home-content"> 
            <ul>
                    <li>Easy to Use: Intuitive interface for quick creation.</li>
                    <li>Customizable: Plenty of templates and customization options.</li>
                    <li>Free: Enjoy all our features at no cost.</li>
                </ul>                                                            
            </section>
            <footer className="contact-info">
                <h3>About the Creator</h3>
                <p><strong>Name:</strong> Alberic Abotchi</p>
                <p><strong>Phone:</strong> +229 5137 8860</p>
                <p><strong>Email:</strong> albericabotchi24@gmail.com</p>
            </footer>
        </div>
    );
};

export default Home;
