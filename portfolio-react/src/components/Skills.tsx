import React from 'react';
import styled from '@emotion/styled';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  color: var(--text-color);
  display: flex;
  align-items: center;

  &:before {
    content: '•';
    color: var(--accent-color);
    margin-right: 0.5rem;
  }
`;

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <SkillsTitle>Skills</SkillsTitle>
      <SkillsGrid>
        <SkillCard>
          <SkillTitle>Frontend</SkillTitle>
          <SkillList>
            <SkillItem>React</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>HTML/CSS</SkillItem>
            <SkillItem>JavaScript</SkillItem>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Backend</SkillTitle>
          <SkillList>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>Express</SkillItem>
            <SkillItem>MongoDB</SkillItem>
            <SkillItem>RESTful APIs</SkillItem>
          </SkillList>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Tools & Others</SkillTitle>
          <SkillList>
            <SkillItem>Git</SkillItem>
            <SkillItem>Docker</SkillItem>
            <SkillItem>AWS</SkillItem>
            <SkillItem>CI/CD</SkillItem>
          </SkillList>
        </SkillCard>
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 