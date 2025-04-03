import React from 'react';
import styled from '@emotion/styled';

const ResumeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PDFViewer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Resume: React.FC = () => {
  return (
    <ResumeContainer>
      <PDFViewer
        src="https://parikkukreja.github.io/Personal-Website/main.pdf"
        title="Resume"
      />
    </ResumeContainer>
  );
};

export default Resume; 