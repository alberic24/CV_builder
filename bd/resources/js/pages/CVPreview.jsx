// CVPreview.js
import React from 'react';
import './cvpreview.css'; // Assurez-vous d'avoir les styles nécessaires pour la prévisualisation

const CVPreview = ({ cvData, photo }) => {
    return (
        <div className="cv-preview">
            <div className="cv-preview-header">
                {photo && <img src={photo} alt="Photo" className="cv-photo" />}
                <h1>{cvData.name}</h1>
                <p>{cvData.email}</p>
                <p>{cvData.phone}</p>
                <p>{cvData.address}</p>
            </div>
            <div className="cv-preview-section">
                <h2>Résumé professionnel</h2>
                <p>{cvData.summary}</p>
            </div>
            <div className="cv-preview-section">
                <h2>Expérience professionnelle</h2>
                <p>{cvData.experience}</p>
            </div>
            <div className="cv-preview-section">
                <h2>Compétences</h2>
                <p>{cvData.skills}</p>
            </div>
            <div className="cv-preview-section">
                <h2>Certifications</h2>
                <p>{cvData.certifications}</p>
            </div>
            <div className="cv-preview-section">
                <h2>Langues</h2>
                <p>{cvData.languages}</p>
            </div>
            <div className="cv-preview-section">
                <h2>Projets</h2>
                <p>{cvData.projects}</p>
            </div>
            <div className="cv-preview-section">
                <h2>Loisirs</h2>
                <p>{cvData.hobbies}</p>
            </div>
        </div>
    );
};

export default CVPreview;
