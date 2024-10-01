import React from 'react';

const CVSection = ({ label, name, value, onChange, isTextarea }) => {
    return (
        <div className="form-group">
            <label>{label}:</label>
            {isTextarea ? (
                <textarea name={name} value={value} onChange={onChange} />
            ) : (
                <input type="text" name={name} value={value} onChange={onChange} />
            )}
        </div>
    );
};

export default CVSection;
