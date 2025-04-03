import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
`;

const GlowEffect = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
`;

const NavLink = styled(motion(Link))`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
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
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const About: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <Container>
      <GlowEffect />
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </Title>

        <NavLinks onMouseLeave={() => setHoveredLink(null)}>
          <NavLink
            to="/"
            onHoverStart={() => setHoveredLink('home')}
            onHoverEnd={() => setHoveredLink(null)}
            style={{
              color: hoveredLink === 'home' ? '#00ffff' : '#ffffff',
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/resume"
            onHoverStart={() => setHoveredLink('resume')}
            onHoverEnd={() => setHoveredLink(null)}
            style={{
              color: hoveredLink === 'resume' ? '#00ffff' : '#ffffff',
            }}
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            onHoverStart={() => setHoveredLink('projects')}
            onHoverEnd={() => setHoveredLink(null)}
            style={{
              color: hoveredLink === 'projects' ? '#00ffff' : '#ffffff',
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onHoverStart={() => setHoveredLink('contact')}
            onHoverEnd={() => setHoveredLink(null)}
            style={{
              color: hoveredLink === 'contact' ? '#00ffff' : '#ffffff',
            }}
          >
            Contact
          </NavLink>
        </NavLinks>
        
        <div className="max-w-6xl mx-auto space-y-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-cyber-primary">My Journey</h2>
              <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-lg transform rotate-3"></div>
              <div className="relative bg-cyber-dark p-8 rounded-lg shadow-xl border border-cyber-primary/20">
                <h3 className="text-2xl font-semibold mb-4 text-cyber-primary">Skills & Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></div>
                    <span className="text-gray-300">Lorem ipsum dolor sit amet</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></div>
                    <span className="text-gray-300">Consectetur adipiscing elit</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyber-primary rounded-full mr-2"></div>
                    <span className="text-gray-300">Sed do eiusmod tempor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cyber-dark p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 border border-cyber-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-cyber-primary">Passion</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="bg-cyber-dark p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 border border-cyber-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-cyber-primary">Vision</h3>
              <p className="text-gray-300">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
            </div>
            <div className="bg-cyber-dark p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 border border-cyber-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-cyber-primary">Mission</h3>
              <p className="text-gray-300">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default About; 