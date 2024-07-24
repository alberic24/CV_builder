import React from 'react';
import './cvtemplates.css';
import template1 from './assets/i.avif';
import template2 from './assets/d.jpg';
import template3 from './assets/e.webp';

const CVTemplates = () => {
    return (
        <div className="templates-container">
            <h2>Choose Your CV Template</h2>
            <div className="template">
                <h3>Template 1</h3>
                <img src={template1} alt="CV Template 1" />
                <a href="#" className="button">Select Template</a>
            </div>
            <div className="template">
                <h3>Template 2</h3>
                <img src={template2} alt="CV Template 2" />
                <a href="#" className="button">Select Template</a>
            </div>
            <div className="template">
                <h3>Template 3</h3>
                <img src={template3} alt="CV Template 3" />
                <a href="#" className="button">Select Template</a>
            </div>
        </div>
    );
};

export default CVTemplates;
