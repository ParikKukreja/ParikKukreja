import React, { FC } from 'react';

const Resume: FC = () => {
    return (
        <div className="w-full h-screen bg-cyber-dark">
            <iframe
                src={`${import.meta.env.BASE_URL}main.pdf`}
                style={{ width: '100%', height: '100vh' }}
                title="Resume"
                className="border-0"
            >
                This browser does not support PDFs. Please download the PDF to view it: 
                <a href={`${import.meta.env.BASE_URL}main.pdf`}>Download PDF</a>.
            </iframe>
        </div>
    );
};

export default Resume; 