import React from 'react';

import { links } from '@configs/links.configs';

import { MotionDiv } from '@components/motion';

import * as Styles from './technology-globe.styles';

const TechnologyGlobe: React.FC = () => {
  return (
    <MotionDiv
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 0.35, once: true }}
    >
      <Styles.TechnologiesGlobe>
        <Styles.TechnologiesGlobeCircles>
          <Styles.TechnologiesGlobeCircle
            src={`${links.cdn}/tech-circle-1.png`}
            number={1}
          />
          <Styles.TechnologiesGlobeCircle
            src={`${links.cdn}/tech-circle-2.png`}
            spin="right"
            animationSpeed="fast"
            number={2}
          />
          <Styles.TechnologiesGlobeCircle
            src={`${links.cdn}/tech-circle-3.png`}
            spin="right"
            number={3}
          />
          <Styles.TechnologiesGlobeCircle
            src={`${links.cdn}/tech-circle-4.png`}
            spin="left"
            number={4}
          />
          <Styles.TechnologiesGlobeCircle
            src={`${links.cdn}/tech-circle-5.png`}
            spin="left"
            animationSpeed="slow"
            number={5}
          />
        </Styles.TechnologiesGlobeCircles>
        <Styles.TechnologiesGlobeTechTitle>
          Tecnologias
        </Styles.TechnologiesGlobeTechTitle>
        <Styles.TechnologiesGlobeTechSubtitle>
          principais
        </Styles.TechnologiesGlobeTechSubtitle>
      </Styles.TechnologiesGlobe>
    </MotionDiv>
  );
};

export { TechnologyGlobe };
