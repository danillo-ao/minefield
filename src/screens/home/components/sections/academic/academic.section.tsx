import React from 'react';

import { ScreenWrapper } from '@components/screen/screen.comp';
import { SectionTitle } from '@components/text';
import { Timeline } from '@components/timeline';

import * as Styles from './academic.styles';
import { AcademicValues } from './academic.values';

const AcademicSection: React.FC = () => {
  return (
    <Styles.AcademicSection id="academic-section">
      <ScreenWrapper>
        {/**/}
        <Styles.AcademicSectionContent>
          <SectionTitle>Formações</SectionTitle>

          <Styles.AcademicSectionTimelineContent>
            <Timeline events={AcademicValues} />
          </Styles.AcademicSectionTimelineContent>
        </Styles.AcademicSectionContent>
        {/**/}
      </ScreenWrapper>
    </Styles.AcademicSection>
  );
};

export { AcademicSection };
