import React from 'react';
import { Link } from 'react-router-dom';
import './cvinfos.css';

function CVInfos() {
    return (
        <div className="cv-container">
            <h2> Choose your template and Create your professional CV </h2>
            <div className="cv-section">
                <h3>Free resume templates and trends in 2024</h3>
                <p>Several resume templates are available to help you land your dream job. Choose the one you like and personalize it.</p>
            </div>

            <div className="cv-section">
                <h3>Why Choose CV Builder?</h3>
                <ul>
                    <li>Professional templates designed by experts in recruitment</li>
                    <li>Customize colors, fonts, and layouts to match your style</li>
                    <li>Download your CV in PDF format for easy sharing</li>
                    <li>Mobile-friendly design – edit your CV on the go</li>
                </ul>
            </div>

            <div className="cv-section">
                <h3>Get Started Today</h3>
                <p>Choose your template and creating your CV with CV Builder today and take the next step in your career!</p>
                <Link to="/cv-templates">
                    <button className="btn-primary">Choose</button>
                </Link>
            </div>

            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Phone: +22951378860</p>
                <f>Email: albericabotchi24@gmail.com</f>
                <d>Address: 123 Fidjrosse, City, Country</d>
            </div>

        </div>
    );
}

export default CVInfos;
