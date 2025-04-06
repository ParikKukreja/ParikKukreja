import React from 'react';
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
  
  &:hover {
    color: #00ffff;
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
  justify-content: center;
  align-items: center;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  z-index: 1;
`;

const ContactCard = styled(motion.a)`
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 255, 255, 0.3);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #00ffff;
`;

const Label = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #ffffff;
`;

const Value = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  word-break: break-all;
  text-align: center;
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <GlowEffect />
      <NavMenu
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </NavMenu>
      <TitleBar>
        <Title>Contact</Title>
      </TitleBar>
      <ContactGrid>
        <ContactCard
          href="https://www.linkedin.com/in/parikkukreja/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon>🔗</Icon>
          <Label>LinkedIn</Label>
          <Value>@parikkukreja</Value>
        </ContactCard>
        <ContactCard
          href="mailto:kukrejaparik@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon>✉️</Icon>
          <Label>Email</Label>
          <Value>kukrejaparik@gmail.com</Value>
        </ContactCard>
        <ContactCard
          href="tel:+12068831615"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon>📱</Icon>
          <Label>Phone</Label>
          <Value>(206) 883-1615</Value>
        </ContactCard>
        <ContactCard
          href="https://github.com/ParikKukreja"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Icon>💻</Icon>
          <Label>GitHub</Label>
          <Value>@ParikKukreja</Value>
        </ContactCard>
      </ContactGrid>
    </Container>
  );
};

export default Contact; 