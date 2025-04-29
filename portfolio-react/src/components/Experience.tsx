import React from 'react';
import styled from '@emotion/styled';

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  padding: 2rem;
  position: relative;
  border-left: 2px solid var(--accent-color);
  margin-bottom: 2rem;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-color);
    left: -11px;
    top: 2rem;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const Company = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: var(--text-color);
  opacity: 0.8;
`;

const Description = styled.p`
  margin-top: 1rem;
  color: var(--text-color);
  line-height: 1.6;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceTitle>Experience</ExperienceTitle>
      <Timeline>
        <TimelineItem>
          <JobTitle>Senior Software Engineer</JobTitle>
          <Company>Tech Company Inc.</Company>
          <Date>2020 - Present</Date>
          <Description>
            Leading the development of web applications using React and Node.js.
            Implementing best practices in software development and mentoring junior developers.
          </Description>
        </TimelineItem>
        <TimelineItem>
          <JobTitle>Software Engineer</JobTitle>
          <Company>Startup Solutions</Company>
          <Date>2018 - 2020</Date>
          <Description>
            Developed and maintained multiple web applications using modern JavaScript frameworks.
            Collaborated with cross-functional teams to deliver high-quality software solutions.
          </Description>
        </TimelineItem>
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience; 