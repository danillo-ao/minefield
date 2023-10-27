import React from 'react';

import { IconChevronsDown } from '@tabler/icons-react';

import { scrollIntoElement } from '@/utils/screen.utils';

import { DisplayName } from '@screens/home/components/sections/hero/components/display-name';

import * as Styles from './hero.styles';

const HeroSection: React.FC = () => {
  return (
    <section id="hero-section">
      <Styles.HeroSectionContent>
        {/**/}
        <Styles.HeroSectionContentGradients>
          <Styles.HeroSectionContentGradientPrimary />
          <Styles.HeroSectionContentGradientSecondary />
          <Styles.HeroSectionContentGradientThird />
        </Styles.HeroSectionContentGradients>

        <DisplayName />

        <Styles.HeroScrollIndicator
          onClick={() => scrollIntoElement('about-section')}
        >
          <IconChevronsDown size={55} />
        </Styles.HeroScrollIndicator>
      </Styles.HeroSectionContent>
      {/**/}
    </section>
  );
};

export { HeroSection };
