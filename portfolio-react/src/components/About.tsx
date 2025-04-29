import React from 'react';
import styled from '@emotion/styled';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          I am a passionate software developer with expertise in building modern web applications.
          My journey in technology began with a curiosity for how things work, and it has evolved
          into a deep love for creating elegant solutions to complex problems.
        </AboutText>
        <AboutText>
          With a strong foundation in both frontend and backend development, I strive to create
          applications that are not only functional but also provide an exceptional user experience.
          I'm constantly learning and adapting to new technologies to stay at the forefront of
          web development.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 