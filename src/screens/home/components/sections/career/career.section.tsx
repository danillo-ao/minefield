import React from 'react';

import { ScreenWrapper } from '@components/screen/screen.comp';
import { SectionTitle } from '@components/text';
import { Timeline } from '@components/timeline';

import * as Styles from './career.styles';
import { CareerValues } from './career.values';

const CareerSection: React.FC = () => {
  return (
    <Styles.CareerSection id="career-section">
      <ScreenWrapper>
        {/**/}
        <Styles.CareerSectionContent>
          <SectionTitle>Carreira</SectionTitle>

          <Styles.CareerSectionTimelineContent>
            <Timeline events={CareerValues} />
          </Styles.CareerSectionTimelineContent>
        </Styles.CareerSectionContent>
        {/**/}
      </ScreenWrapper>
    </Styles.CareerSection>
  );
};

export { CareerSection };
