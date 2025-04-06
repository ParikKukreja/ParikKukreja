import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaGithub, FaInfoCircle, FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: #00ffff #0a0a0a;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #0a0a0a;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #00ffff;
    border-radius: 3px;
  }
`;

const GlowEffect = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100%;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

// Flip Card Components
const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  height: 380px;
  perspective: 1000px;
  border-radius: 12px;
`;

const FlipCardInner = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const FlipCardFace = styled.div<{ isBack?: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(20, 20, 20, 0.9);
  transform: ${props => props.isBack ? 'rotateY(180deg)' : ''};
`;

const ProjectImage = styled.div`
  height: 160px;
  background: linear-gradient(135deg, #001a1a, #003333);
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 100px;
    background: rgba(0, 255, 255, 0.1);
    top: -50px;
    left: -25%;
    transform: rotate(-15deg);
    animation: shimmer 3s infinite linear;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateY(-100px) rotate(-15deg);
    }
    100% {
      transform: translateY(200px) rotate(-15deg);
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #00ffff;
  font-weight: 500;
`;

const ProjectDate = styled.div`
  font-size: 0.85rem;
  color: rgba(0, 255, 255, 0.7);
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00ffff;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  background: rgba(0, 255, 255, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 255, 255, 0.15);
    border-color: rgba(0, 255, 255, 0.5);
  }
`;

const ProjectDetails = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const DetailItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: left;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    background: #00ffff;
    border-radius: 50%;
  }
`;

const BackButton = styled.button`
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.3);
  color: #00ffff;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(0, 255, 255, 0.15);
    border-color: rgba(0, 255, 255, 0.5);
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  details: string[];
  dates: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Placeholder 1",
    description: "An interactive visualization tool for neural networks that helps understand how they process data and make predictions.",
    github: "https://github.com/username/neural-viz",
    dates: "Jan 2023 - Mar 2023",
    details: [
      "Built with React and D3.js for interactive visualizations",
      "Implements forward propagation visualization for different network architectures",
      "Real-time weight and bias adjustment visualization",
      "Supports various activation functions with visual representation"
    ]
  },
  {
    id: 2,
    title: "Placeholder 2",
    description: "A simulator for quantum computing algorithms that demonstrates quantum principles like superposition and entanglement.",
    github: "https://github.com/username/quantum-sim",
    dates: "Apr 2023 - Jul 2023",
    details: [
      "Built with TypeScript and WebGL for efficient calculations",
      "Visualization of qubit states and quantum gates",
      "Implements Grover's algorithm and Shor's algorithm",
      "Interactive tutorial mode for quantum computing concepts"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Projects: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  const flipCard = (id: number) => {
    setFlippedCard(id === flippedCard ? null : id);
  };

  return (
    <Container>
      <GlowEffect />
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
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
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <FlipCard>
                <FlipCardInner isFlipped={flippedCard === project.id}>
                  <FlipCardFace>
                    <ProjectImage />
                    <ProjectContent>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDate>{project.dates}</ProjectDate>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <ProjectLinks>
                        <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub /> GitHub
                        </ProjectLink>
                        <ProjectLink as="button" onClick={() => flipCard(project.id)}>
                          <FaInfoCircle /> Details
                        </ProjectLink>
                      </ProjectLinks>
                    </ProjectContent>
                  </FlipCardFace>
                  
                  <FlipCardFace isBack>
                    <ProjectDetails>
                      <ProjectTitle>{project.title} - Details</ProjectTitle>
                      <ProjectDate>{project.dates}</ProjectDate>
                      <DetailsList>
                        {project.details.map((detail, i) => (
                          <DetailItem key={i}>{detail}</DetailItem>
                        ))}
                      </DetailsList>
                      <BackButton onClick={() => flipCard(project.id)}>
                        <FaArrowLeft /> Back
                      </BackButton>
                    </ProjectDetails>
                  </FlipCardFace>
                </FlipCardInner>
              </FlipCard>
            </motion.div>
          ))}
        </ProjectsGrid>
      </Content>
    </Container>
  );
};

export default Projects; 