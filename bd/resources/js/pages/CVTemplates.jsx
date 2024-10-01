import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cvtemplates.css';
import template1 from './assets/leo.png';
import template2 from './assets/cv2.png';
import template3 from './assets/naru.png';

const CVTemplates = () => {
    const navigate = useNavigate();

    const selectTemplate = (templateId) => {
        if (templateId === 1) {
            navigate(`/fill-cv/${templateId}`);
        } else if (templateId === 2) {
            navigate(`/fill-cv2/${templateId}`);
        } else if(templateId === 3) {
            navigate(`/fill-cv3/${templateId}`);
        }
    };

    return (
        <div className="templates-container">
            <h2>Choose Your CV Template</h2>
            <div className="template">
                <h3>Template 1</h3>
                <img src={template1} alt="CV Template 1" />
                <button onClick={() => selectTemplate(1)} className="button">Select Template</button>
            </div>
            <div className="template">
                <h3>Template 2</h3>
                <img src={template2} alt="CV Template 2" />
                <button onClick={() => selectTemplate(2)} className="button">Select Template</button>
            </div>
            <div className="template">
                <h3>Template 3</h3>
                <img src={template3} alt="CV Template 3" />
                <button onClick={() => selectTemplate(3)} className="button">Select Template</button>
            </div>
        </div>
    );
};

export default CVTemplates;
