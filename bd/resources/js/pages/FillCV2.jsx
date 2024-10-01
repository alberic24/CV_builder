import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CVSection from './CVSection'; // Assurez-vous que ce composant est correctement défini
import './fillcv.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const FillCV = () => {
    const { templateId } = useParams();
    const [cvData, setCvData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        summary: '',
        experience: '',
        skills: '',
        certifications: '',
        languages: '',
        projects: '',
        hobbies: '',
    });

    const [photo, setPhoto] = useState(null);
    const [language, setLanguage] = useState('fr'); // Langue par défaut : français

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCvData({ ...cvData, [name]: value });
    };

    const handlePhotoChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const generatePDF = () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 15;
        const columnWidth = (pageWidth - 3 * margin) / 2;
        const lineHeight = 10;
        const headerMargin = 30;
        const sectionSpacing = 30;
        const extraSpacingAfterSummary = 60;
        const reducedSectionSpacing = 15;
        let yPos = margin + headerMargin;

        // Définir les couleurs
        const primaryColor = { r: 0, g: 102, b: 204 }; // Bleu
        const secondaryColor = { r: 255, g: 255, b: 255 }; // Blanc

        // Couleurs pour chaque section
        const titleColor = [0, 0, 0];

        // Couleur pour la gauche (bleu)
        doc.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b);
        doc.rect(0, 0, pageWidth / 2, pageHeight, 'F');

        // Couleur pour la droite (blanc)
        doc.setFillColor(secondaryColor.r, secondaryColor.g, secondaryColor.b);
        doc.rect(pageWidth / 2, 0, pageWidth / 2, pageHeight, 'F');

        // Ajout de la photo si présente
        if (photo) {
            const imgWidth = 50;
            const imgHeight = 50;
            const x = margin;
            const y = margin;

            // Masque circulaire
            doc.setFillColor(255, 255, 255);
            doc.ellipse(x + imgWidth / 2, y + imgHeight / 2, imgWidth / 2, imgHeight / 2, 'F');

            // Ajouter l'image
            doc.addImage(photo, 'JPEG', x, y, imgWidth, imgHeight, undefined, 'FAST');

            yPos = margin + imgHeight + 10;
        }

        const addSection = (title, text, xPos, yPos, spacing = sectionSpacing, titleColor = [0, 0, 0]) => {
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...titleColor); // Set title color
            doc.text(title, xPos, yPos);
            yPos += lineHeight;
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0); // Set content color to black
            doc.text(text, xPos, yPos, { maxWidth: columnWidth });
            yPos += spacing;
            return yPos;
        };

        // Définir les labels dynamiques pour le PDF
        const pdfLabels = {
            fr: {
                name: 'Nom:',
                email: 'Email:',
                phone: 'Téléphone:',
                address: 'Adresse:',
                summary: 'Profil professionnel:',
                experience: 'Parcour professionnel:',
                skills: 'Compétences:',
                certifications: 'Formations:',
                languages: 'Langues:',
                projects: 'Projets:',
                hobbies: 'Loisirs:'
            },
            en: {
                name: 'Name:',
                email: 'Email:',
                phone: 'Phone:',
                address: 'Address:',
                summary: 'Professional Summary:',
                experience: 'Work Experience:',
                skills: 'Skills:',
                certifications: 'Certifications:',
                languages: 'Languages:',
                projects: 'Projects:',
                hobbies: 'Hobbies:'
            }
        };

        // Utiliser les labels correspondant à la langue sélectionnée
        const selectedLabels = pdfLabels[language];

        let leftColumnY = yPos;
        let rightColumnY = yPos;

        // Ajouter les sections avec des espacements réduits
        leftColumnY = addSection(selectedLabels.name, cvData.name, margin, leftColumnY, reducedSectionSpacing);
        leftColumnY = addSection(selectedLabels.email, cvData.email, margin, leftColumnY, reducedSectionSpacing);
        leftColumnY = addSection(selectedLabels.phone, cvData.phone, margin, leftColumnY, reducedSectionSpacing);
        leftColumnY = addSection(selectedLabels.address, cvData.address, margin, leftColumnY, reducedSectionSpacing);

        // Ajouter la section 'Résumé professionnel' avec un espacement supplémentaire
        leftColumnY = addSection(selectedLabels.summary, cvData.summary, margin, leftColumnY, extraSpacingAfterSummary);

        // Ajouter la section 'Expérience professionnelle' avec un espacement normal
        leftColumnY = addSection(selectedLabels.experience, cvData.experience, margin, leftColumnY, sectionSpacing);

        rightColumnY = addSection(selectedLabels.skills, cvData.skills, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(selectedLabels.certifications, cvData.certifications, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(selectedLabels.languages, cvData.languages, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(selectedLabels.projects, cvData.projects, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(selectedLabels.hobbies, cvData.hobbies, margin + columnWidth + margin, rightColumnY);

        // Générer et télécharger le PDF
        doc.save('cv.pdf');
    };

    // Texte dynamique en fonction de la langue
    const labels = {
        fr: {
            name: "Nom",
            email: "Email",
            address: "Adresse",
            phone: "Téléphone",
            summary: "Profil professionnel",
            experience: "Parcour professionnel",
            skills: "Compétences",
            certifications: "Formation",
            projects: "Projets",
            languages: "Langues",
            hobbies: "Loisirs",
            photo: "Télécharger une photo",
            downloadPDF: "Télécharger PDF",
            changeLanguage: "Changer en Anglais"
        },
        en: {
            name: "Name",
            email: "Email",
            address: "Address",
            phone: "Phone",
            summary: "Professional Summary",
            experience: "Work Experience",
            skills: "Skills",
            certifications: "Certifications",
            projects: "Projects",
            languages: "Languages",
            hobbies: "Hobbies",
            photo: "Upload a photo",
            downloadPDF: "Download PDF",
            changeLanguage: "Switch to French"
        }
    };

    return (
        <div className="fill-cv-container">
            <form className="cv-form">
                <div className="cv-form-left">
                    <div style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '5px' }}>
                        <CVSection label={labels[language].name} name="name" value={cvData.name} onChange={handleChange} />
                        <CVSection label={labels[language].email} name="email" value={cvData.email} onChange={handleChange} />
                        <CVSection label={labels[language].address} name="address" value={cvData.address} onChange={handleChange} />
                        <CVSection label={labels[language].phone} name="phone" value={cvData.phone} onChange={handleChange} />
                    </div>
                    <CVSection label={labels[language].summary} name="summary" value={cvData.summary} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={labels[language].experience} name="experience" value={cvData.experience} onChange={handleChange} isTextarea rows={4} />
                </div>

                <div className="cv-form-right">
                    <CVSection label={labels[language].skills} name="skills" value={cvData.skills} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={labels[language].certifications} name="certifications" value={cvData.certifications} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={labels[language].languages} name="languages" value={cvData.languages} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={labels[language].projects} name="projects" value={cvData.projects} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={labels[language].hobbies} name="hobbies" value={cvData.hobbies} onChange={handleChange} isTextarea rows={4} />
                </div>

                <div className="photo-upload">
                    <label htmlFor="photo">{labels[language].photo}</label>
                    <input type="file" accept="image/*" onChange={handlePhotoChange} />
                </div>

                <button type="button" onClick={generatePDF}>{labels[language].downloadPDF}</button>
                <button type="button" onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}>{labels[language].changeLanguage}</button>
            </form>
        </div>
    );
};

export default FillCV;
