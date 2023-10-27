import React from 'react';

import { IconedCard } from '@components/iconed-card';
import { ScreenWrapper } from '@components/screen/screen.comp';
import { SectionTitle } from '@components/text';

import { contactsValues } from '@screens/home/components/sections/contact/contact.values';

import * as Styles from './contact.styles';

const ContactSection: React.FC = () => {
  return (
    <section id="contact-section">
      <Styles.ContactContent>
        <ScreenWrapper>
          {/**/}
          <SectionTitle>Entrar em contato</SectionTitle>
          <Styles.ContactSubtitle>
            Elementar, meu caro Watson...
          </Styles.ContactSubtitle>

          <Styles.ContactGrid>
            {contactsValues.map(contact => (
              <IconedCard key={contact.key} {...contact} />
            ))}
          </Styles.ContactGrid>
          {/**/}
        </ScreenWrapper>
      </Styles.ContactContent>
    </section>
  );
};

export { ContactSection };
