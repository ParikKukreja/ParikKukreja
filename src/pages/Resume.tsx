import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(20, 20, 20, 0.8);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 255, 0.2);
    border-radius: 4px;
    border: 1px solid rgba(0, 255, 255, 0.1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 255, 255, 0.3);
  }
`;

const GlowEffect = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
`;

const NavMenu = styled(motion.nav)`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.1em;
  position: relative;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ffff;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #00ffff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const TitleBar = styled.div`
  width: 100%;
  padding: 1.5rem;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
`;

const DownloadButton = styled(motion.a)`
  padding: 0.8rem 1.5rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 4px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.2);
    border-color: rgba(0, 255, 255, 0.3);
  }
`;

const PDFContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Resume: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <Container>
      <GlowEffect />
      <NavMenu
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavLink 
          to="/"
          onMouseEnter={() => setHoveredLink('home')}
          onMouseLeave={() => setHoveredLink(null)}
          style={{
            color: hoveredLink === 'home' ? '#00ffff' : '#ffffff',
          }}
        >
          Home
        </NavLink>
        <NavLink 
          to="#about"
          onMouseEnter={() => setHoveredLink('about')}
          onMouseLeave={() => setHoveredLink(null)}
          style={{
            color: hoveredLink === 'about' ? '#00ffff' : '#ffffff',
          }}
        >
          About
        </NavLink>
        <NavLink 
          to="#projects"
          onMouseEnter={() => setHoveredLink('projects')}
          onMouseLeave={() => setHoveredLink(null)}
          style={{
            color: hoveredLink === 'projects' ? '#00ffff' : '#ffffff',
          }}
        >
          Projects
        </NavLink>
        <NavLink 
          to="#contact"
          onMouseEnter={() => setHoveredLink('contact')}
          onMouseLeave={() => setHoveredLink(null)}
          style={{
            color: hoveredLink === 'contact' ? '#00ffff' : '#ffffff',
          }}
        >
          Contact
        </NavLink>
      </NavMenu>
      <TitleBar>
        <Title>Resume</Title>
        <DownloadButton
          href={`${import.meta.env.BASE_URL}main.pdf`}
          download="Parik_Kukreja_Resume.pdf"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </DownloadButton>
      </TitleBar>
      <PDFContainer>
        <iframe
          src={`${import.meta.env.BASE_URL}main.pdf`}
          style={{ 
            width: '100%', 
            height: '1200px', 
            border: 'none',
            backgroundColor: 'transparent'
          }}
          title="Resume PDF"
        />
      </PDFContainer>
    </Container>
  );
};

export default Resume; 