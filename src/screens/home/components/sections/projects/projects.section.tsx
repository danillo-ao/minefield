import React from 'react';

import { ScreenWrapper } from '@components/screen/screen.comp';
import { SectionTitle } from '@components/text';

import { ProjectCard } from '@screens/home/components/sections/projects/components/project-card';
import { projectsValues } from '@screens/home/components/sections/projects/projects.values';

import * as Styles from './projects.styles';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects-section">
      <Styles.ProjectsSectionContent>
        <ScreenWrapper>
          {/**/}
          <Styles.ProjectsWrapper>
            <SectionTitle>Projetos</SectionTitle>
            <Styles.ProjectsSubtitle>
              Conheça alguns dos meus projetos pessoais e outros nos quais
              participei do desenvolvimento.
            </Styles.ProjectsSubtitle>

            <Styles.ProjectsContent>
              {projectsValues.map(project => (
                <ProjectCard key={project.key} {...project} />
              ))}
            </Styles.ProjectsContent>
          </Styles.ProjectsWrapper>
          {/**/}
        </ScreenWrapper>
      </Styles.ProjectsSectionContent>
    </section>
  );
};

export { ProjectsSection };
