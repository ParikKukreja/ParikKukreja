import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './components/Resume';

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
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 2rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
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

function App() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <Router>
      <Container>
        <GlowEffect />
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Parik Kukreja
          </Title>
          <NavLinks>
            <NavLink
              to="/about"
              onHoverStart={() => setHoveredLink('about')}
              onHoverEnd={() => setHoveredLink(null)}
              style={{
                color: hoveredLink === 'about' ? '#00ffff' : '#ffffff',
              }}
            >
              About
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
        </Content>
        <Routes>
          <Route path="/resume" element={<Resume />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
