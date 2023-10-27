import React from 'react';

import { uuid } from '@/utils/encode';

import { MotionDiv } from '@components/motion';
import { Tag } from '@components/tag';

import { ThemeColorName } from '@theme/theme.types';

import * as Styles from './project-card.styles';
import { ProjectCardProps } from './project-card.types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icons,
  tags,
  link,

  motion,
}) => {
  const tagBackground: { [key: string]: ThemeColorName } = {
    pessoal: 'green800',
    profissional: 'background3',
  };
  return (
    <MotionDiv from="bottom" {...motion}>
      <Styles.ProjectCard target="_blank" href={link}>
        <Styles.ProjectCardIcons>
          <Styles.ProjectCardIconsContent>
            {icons}
          </Styles.ProjectCardIconsContent>

          {tags?.length && (
            <Styles.ProjectCardTags>
              {tags.map(tag => (
                <Tag
                  label={tag}
                  key={uuid(tag)}
                  bg={tagBackground[tag.toLowerCase()]}
                />
              ))}
            </Styles.ProjectCardTags>
          )}
        </Styles.ProjectCardIcons>
        <Styles.ProjectCardTitle>{title}</Styles.ProjectCardTitle>
        <Styles.ProjectCardDescription>
          {description}
        </Styles.ProjectCardDescription>
      </Styles.ProjectCard>
    </MotionDiv>
  );
};

export { ProjectCard };
