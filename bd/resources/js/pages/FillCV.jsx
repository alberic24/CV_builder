import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CVSection from './CVSection';
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
    const [language, setLanguage] = useState('fr'); // État pour la langue

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
        const extraSpacingAfterSummary = 60; // Additional spacing after the summary section
        const reducedSectionSpacing = 15;
        let yPos = margin + headerMargin;

        // Define colors
        const chocolateColor = { r: 210, g: 105, b: 30 }; // Chocolate
        const blackColor = { r: 0, g: 0, b: 0 }; // Black

        // Fill left column with chocolate color
        doc.setFillColor(chocolateColor.r, chocolateColor.g, chocolateColor.b);
        doc.rect(0, 0, pageWidth / 2, pageHeight, 'F');

        // Fill right column with black color
        doc.setFillColor(blackColor.r, blackColor.g, blackColor.b);
        doc.rect(pageWidth / 2, 0, pageWidth / 2, pageHeight, 'F');

        // Set text color to white
        doc.setTextColor(255, 255, 255);

        // Add photo to the PDF with a circular mask
        if (photo) {
            const imgWidth = 50;
            const imgHeight = 50;
            const x = margin;
            const y = margin;

            // Draw the circular mask
            doc.setFillColor(255, 255, 255);
            doc.ellipse(x + imgWidth / 2, y + imgHeight / 2, imgWidth / 2, imgHeight / 2, 'F');

            // Add the image
            doc.addImage(photo, 'JPEG', x, y, imgWidth, imgHeight);

            yPos = margin + imgHeight + 10;
        }

        const addSection = (title, text, xPos, yPos, spacing = sectionSpacing) => {
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text(title, xPos, yPos);
            yPos += lineHeight;
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text(text, xPos, yPos, { maxWidth: columnWidth });
            yPos += spacing;
            return yPos;
        };

        let leftColumnY = yPos;
        let rightColumnY = yPos;

        // Add sections with reduced spacing
        leftColumnY = addSection(language === 'fr' ? 'Nom:' : 'Name:', cvData.name, margin, leftColumnY, reducedSectionSpacing);
        leftColumnY = addSection(language === 'fr' ? 'Email:' : 'Email:', cvData.email, margin, leftColumnY, reducedSectionSpacing);
        leftColumnY = addSection(language === 'fr' ? 'Téléphone:' : 'Phone:', cvData.phone, margin, leftColumnY, reducedSectionSpacing);
        leftColumnY = addSection(language === 'fr' ? 'Adresse:' : 'Address:', cvData.address, margin, leftColumnY, reducedSectionSpacing);
        
        // Add 'Résumé professionnel' section with extra spacing after it
        leftColumnY = addSection(language === 'fr' ? 'Résumé professionnel:' : 'Professional Summary:', cvData.summary, margin, leftColumnY, extraSpacingAfterSummary);
        
        // Add 'Expérience professionnelle' section with normal spacing
        leftColumnY = addSection(language === 'fr' ? 'Expérience professionnelle:' : 'Work Experience:', cvData.experience, margin, leftColumnY, sectionSpacing);
        
        // Add right column sections
        rightColumnY = addSection(language === 'fr' ? 'Compétences:' : 'Skills:', cvData.skills, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(language === 'fr' ? 'Certifications:' : 'Certifications:', cvData.certifications, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(language === 'fr' ? 'Langues:' : 'Languages:', cvData.languages, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(language === 'fr' ? 'Projets:' : 'Projects:', cvData.projects, margin + columnWidth + margin, rightColumnY);
        rightColumnY = addSection(language === 'fr' ? 'Loisirs:' : 'Hobbies:', cvData.hobbies, margin + columnWidth + margin, rightColumnY);

        doc.save('cv.pdf');
    };

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'fr' ? 'en' : 'fr'));
    };

    return (
        <div className="fill-cv-container">
            <form className="cv-form">
                <div className="cv-form-left">
                    <CVSection label={language === 'fr' ? "Nom" : "Name"} name="name" value={cvData.name} onChange={handleChange} />
                    <CVSection label={language === 'fr' ? "Email" : "Email"} name="email" value={cvData.email} onChange={handleChange} />
                    <CVSection label={language === 'fr' ? "Téléphone" : "Phone"} name="phone" value={cvData.phone} onChange={handleChange} />
                    <CVSection label={language === 'fr' ? "Adresse" : "Address"} name="address" value={cvData.address} onChange={handleChange} />
                    <CVSection label={language === 'fr' ? "Résumé professionnel" : "Professional Summary"} name="summary" value={cvData.summary} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={language === 'fr' ? "Expérience professionnelle" : "Work Experience"} name="experience" value={cvData.experience} onChange={handleChange} isTextarea rows={4} />
                </div>
                <div className="cv-form-right">
                    <CVSection label={language === 'fr' ? "Compétences" : "Skills"} name="skills" value={cvData.skills} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={language === 'fr' ? "Certifications" : "Certifications"} name="certifications" value={cvData.certifications} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={language === 'fr' ? "Langues" : "Languages"} name="languages" value={cvData.languages} onChange={handleChange} isTextarea rows={4} />
                    <CVSection label={language === 'fr' ? "Projets" : "Projects"} name="projects" value={cvData.projects} onChange={handleChange} isTextarea rows={6} />
                    <CVSection label={language === 'fr' ? "Loisirs" : "Hobbies"} name="hobbies" value={cvData.hobbies} onChange={handleChange} isTextarea rows={4} />
                </div>
                <div className="buttons-container" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <input type="file" accept="image/*" onChange={handlePhotoChange} />
    <button type="button" onClick={generatePDF} style={{ margin: '0' }}>
        {language === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
    </button>
    <button type="button" onClick={toggleLanguage} style={{ margin: '0' }}>
        {language === 'fr' ? 'Changer en anglais' : 'Switch to French'}
    </button>
</div>

            </form>
        </div>
    );
};

export default FillCV;
