import React from 'react';

import { MotionDiv } from '@components/motion';

import * as Styles from './technology-card.styles';
import { TechnologyCardProps } from './technology-card.types';

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  icon,
  description,
  invert,
  link,

  motion,
}) => {
  const invertStyle = { '@initial': invert, '@650': false };
  return (
    <Styles.TechnologyCardContent
      invert={invertStyle}
      href={link}
      target="_blank"
    >
      <MotionDiv {...motion} className="technology-card-motion">
        <Styles.TechnologyCardIcon>{icon}</Styles.TechnologyCardIcon>
        <Styles.TechnologyCardDetails>
          <Styles.TechnologyCardTitle invert={invertStyle}>
            {name}
          </Styles.TechnologyCardTitle>
          <Styles.TechnologyCardDescription invert={invertStyle}>
            {description}
          </Styles.TechnologyCardDescription>
        </Styles.TechnologyCardDetails>
      </MotionDiv>
    </Styles.TechnologyCardContent>
  );
};

export { TechnologyCard };
