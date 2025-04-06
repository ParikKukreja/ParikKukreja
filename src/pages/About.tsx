import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaCode, FaGraduationCap, FaBriefcase, FaFlask, FaGamepad } from 'react-icons/fa';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #00ffff #0a0a0a;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #00ffff;
    border-radius: 3px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const NavLink = styled(motion(Link))`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.1em;
  position: relative;
  padding: 0.25rem 0.5rem;
  
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

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex: 1;
`;

const Section = styled(motion.section)`
  border-radius: 8px;
  background: rgba(20, 20, 20, 0.7);
  padding: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 255, 255, 0.1);
    border-color: rgba(0, 255, 255, 0.2);
  }

  &:first-of-type {
    grid-column: 1 / -1;
  }
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: #00ffff;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  padding-bottom: 0.5rem;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const BlurbText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #e0e0e0;
  margin-bottom: 0.5rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const Card = styled.div`
  background: rgba(30, 30, 30, 0.5);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 255, 255, 0.1);
    border-color: rgba(0, 255, 255, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #00ffff;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.div`
  background: rgba(0, 255, 255, 0.07);
  border: 1px solid rgba(0, 255, 255, 0.2);
  color: #00ffff;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #00ffff;
  margin-bottom: 0.15rem;
`;

const ExperienceSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
`;

const Company = styled.span`
  color: #e0e0e0;
  font-weight: 500;
`;

const Date = styled.span`
  color: rgba(0, 255, 255, 0.7);
  font-size: 0.8rem;
`;

const BulletList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 1rem;
`;

const BulletItem = styled.li`
  position: relative;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
  color: #b0b0b0;
  font-size: 0.85rem;
  line-height: 1.3;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.4rem;
    width: 0.3rem;
    height: 0.3rem;
    background: #00ffff;
    border-radius: 50%;
  }
`;

const About: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <Container>
      <GlowEffect />
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
        
        <SectionContainer>
          {/* TLDR/Blurb Section */}
          <Section
            custom={0}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle><FaCode size={16} /> TLDR</SectionTitle>
            <BlurbText>
            Hi! I'm a Computer Science student at the University of Washington, Seattle, passionate about using cutting-edge 
            tech to solve real-world problems. When I’m not coding, you’ll probably playing of Magic: The Gathering—a hobby 
            I’ve loved since elementary school. This summer, I’ll be a Software Development Engineer Intern at Amazon in their 
            Sunnyvale office. 
            </BlurbText>
          </Section>

          {/* Experience Section */}
          <Section
            custom={1}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle><FaBriefcase size={16} /> Experience</SectionTitle>
            
            <ExperienceContainer>
              <ExperienceItem>
                <ExperienceTitle>Undergraduate Researcher</ExperienceTitle>
                <ExperienceSubtitle>
                  <Company>UW Makeability Lab</Company>
                  <Date>Mar 2025 - Present</Date>
                </ExperienceSubtitle>
              </ExperienceItem>
              
              <ExperienceItem>
                <ExperienceTitle>Software Engineer Intern</ExperienceTitle>
                <ExperienceSubtitle>
                  <Company>Roby</Company>
                  <Date>Jun 2024 - Oct 2024</Date>
                </ExperienceSubtitle>
              </ExperienceItem>
              
              <ExperienceItem>
                <ExperienceTitle>Software Engineer Intern</ExperienceTitle>
                <ExperienceSubtitle>
                  <Company>Armoire</Company>
                  <Date>Jun 2024 - Aug 2024</Date>
                </ExperienceSubtitle>
              </ExperienceItem>

              <ExperienceItem>
                <ExperienceTitle>Engineering Intern</ExperienceTitle>
                <ExperienceSubtitle>
                  <Company>WiBotic</Company>
                  <Date>Oct 2022 - Nov 2022</Date>
                </ExperienceSubtitle>
              </ExperienceItem>

            </ExperienceContainer>
          </Section>

          {/* Skills Section */}
          <Section
            custom={2}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle><FaFlask size={16} /> Skills</SectionTitle>
            
            <GridContainer>
              <Card>
                <CardTitle>Programming</CardTitle>
                <SkillsContainer>
                  <Skill>Java</Skill>
                  <Skill>Python</Skill>
                  <Skill>C</Skill>
                  <Skill>C++</Skill>
                  <Skill>TypeScript</Skill>
                  <Skill>JavaScript</Skill>
                  <Skill>SQL</Skill>
                </SkillsContainer>
              </Card>
              
              <Card>
                <CardTitle>Web Tech</CardTitle>
                <SkillsContainer>
                  <Skill>React</Skill>
                  <Skill>Node.js</Skill>
                  <Skill>Django</Skill>
                  <Skill>HTML/CSS</Skill>
                  <Skill>Flask</Skill>
                  <Skill>Vue 3</Skill>
                </SkillsContainer>
              </Card>
              
              <Card>
                <CardTitle>DevOps & Tools</CardTitle>
                <SkillsContainer>
                  <Skill>Git</Skill>
                  <Skill>GitHub</Skill>
                  <Skill>Docker</Skill>
                  <Skill>AWS</Skill>
                  <Skill>Google Cloud</Skill>
                  <Skill>WSL</Skill>
                  <Skill>JUnit</Skill>
                </SkillsContainer>
              </Card>
              
              <Card>
                <CardTitle>Development Tools</CardTitle>
                <SkillsContainer>
                  <Skill>VS Code</Skill>
                  <Skill>Cursor</Skill>
                  <Skill>PyCharm</Skill>
                  <Skill>Sentry.io</Skill>
                  <Skill>OpenCV</Skill>
                  <Skill>Pillow</Skill>
                </SkillsContainer>
              </Card>
            </GridContainer>
          </Section>

          {/* Relevant Coursework Section */}
          <Section
            custom={3}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle><FaGraduationCap size={16} /> Relevant Coursework</SectionTitle>
            <BulletList>
              <BulletItem>Data Structures, Algorithms, and Paralellism</BulletItem>
              <BulletItem>The Hardware/Software Interface</BulletItem>
              <BulletItem>Data Management</BulletItem>
              <BulletItem>Systems Programming</BulletItem>
              <BulletItem>Software Design and Implementation</BulletItem>
              <BulletItem>Programming in Java</BulletItem>
              <BulletItem>Discrete Math</BulletItem>
              <BulletItem>Linear Algebra</BulletItem>
              <BulletItem>Multi-Variable Calulus</BulletItem>
            </BulletList>
          </Section>

          {/* Hobbies/Interests Section */}
          <Section
            custom={4}
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <SectionTitle><FaGamepad size={16} /> Hobbies & Interests</SectionTitle>
            <BulletList>
              <BulletItem>Magic: the Gathering</BulletItem>
              <BulletItem>Chess</BulletItem>
              <BulletItem>Swimming</BulletItem>
              <BulletItem>(American) Football</BulletItem>
              <BulletItem>Star Wars</BulletItem>
              <BulletItem>Poker</BulletItem>
              <BulletItem>Online Gaming</BulletItem>
              <BulletItem>Science Fiction</BulletItem>
              <BulletItem>Classic Rock</BulletItem>
            </BulletList>
          </Section>
        </SectionContainer>
      </Content>
    </Container>
  );
};

export default About; 