import React from 'react';

import { links } from '@configs/links.configs';

import { IconedCard } from '@components/iconed-card';
import { NextjsIcon } from '@components/icons/nextjs.icon';
import { ReactNativeIcon } from '@components/icons/react-native.icon';
import { ReactIcon } from '@components/icons/react.icon';
import { TypescriptIcon } from '@components/icons/typescript.icon';
import { ScreenWrapper } from '@components/screen/screen.comp';

import { TechnologyCard } from '@screens/home/components/sections/technologies/components/technology-card';
import { TechnologyGlobe } from '@screens/home/components/sections/technologies/components/technology-globe';
import { TechnologiesProps } from '@screens/home/components/sections/technologies/technologies.types';
import {
  complementaryTechnologies,
  extraTechnologies,
} from '@screens/home/components/sections/technologies/technologies.values';

import * as Styles from './technologies.styles';

const TechnologiesSection: React.FC<TechnologiesProps> = () => {
  return (
    <section id="technologies-section">
      <Styles.TechnologiesContent>
        <ScreenWrapper>
          {/**/}

          <Styles.TechnologiesGlobeWrapperMobile>
            <TechnologyGlobe />
          </Styles.TechnologiesGlobeWrapperMobile>

          <Styles.TechnologiesGlobeContent>
            <Styles.TechnologiesGlobeColumn>
              <Styles.TechnologyWrapper>
                <TechnologyCard
                  name="React JS"
                  icon={<ReactIcon width={40} height={40} />}
                  description="Biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
                  link={links.reactJs}
                />
              </Styles.TechnologyWrapper>
              <Styles.TechnologyWrapper>
                <TechnologyCard
                  name="Next JS"
                  icon={<NextjsIcon width={40} height={40} />}
                  description={
                    'Framework React para construção de sites e aplicativos web rápidos, com recursos de SSR e pré-renderização.'
                  }
                  link={links.nextJs}
                />
              </Styles.TechnologyWrapper>
            </Styles.TechnologiesGlobeColumn>

            <Styles.TechnologiesGlobeWrapper>
              <TechnologyGlobe />
            </Styles.TechnologiesGlobeWrapper>

            <Styles.TechnologiesGlobeColumn>
              <Styles.TechnologyWrapper>
                <TechnologyCard
                  name="React Native"
                  icon={<ReactNativeIcon width={40} height={40} />}
                  description="Uma framework para desenvolver aplicativos nativos para dispositivos móveis, como IOS e Android."
                  invert
                  motion={{ from: 'right' }}
                  link={links.reactNative}
                />
              </Styles.TechnologyWrapper>
              <Styles.TechnologyWrapper>
                <TechnologyCard
                  name="Typescript"
                  icon={<TypescriptIcon width={40} height={40} />}
                  description="Um superset do JavaScript que traz tipos estáticos para tornar o código mais seguro e fácil de manter."
                  invert
                  motion={{ from: 'right' }}
                  link={links.typescript}
                />
              </Styles.TechnologyWrapper>
            </Styles.TechnologiesGlobeColumn>
          </Styles.TechnologiesGlobeContent>
          {/**/}
          <Styles.ExtraTechnologyWrapper>
            <Styles.ExtraTechnologyTitle>
              Tecnologias complementares
            </Styles.ExtraTechnologyTitle>
            <Styles.ExtraTechnologySubtitle>
              Aqui estão as tecnologias com as quais trabalho ativamente ou com
              as quais já tive algum contato ao longo da minha carreira.
            </Styles.ExtraTechnologySubtitle>

            <Styles.ExtraTechnologyContentCards>
              {extraTechnologies.map(tech => (
                <Styles.ExtraTechnology key={tech.key}>
                  <IconedCard
                    name={tech.name}
                    description={tech.description}
                    icon={tech.icon}
                    link={tech.link}
                  />
                </Styles.ExtraTechnology>
              ))}
            </Styles.ExtraTechnologyContentCards>
          </Styles.ExtraTechnologyWrapper>

          <Styles.ExtraTechnologyWrapper>
            <Styles.ExtraTechnologyTitle>
              Conhecimentos complementares
            </Styles.ExtraTechnologyTitle>
            <Styles.ExtraTechnologySubtitle>
              Essas são tecnologias e softwares das quais eventualmente adquiri
              algum conhecimento... possivelmente por meio de algum hobby.
            </Styles.ExtraTechnologySubtitle>

            <Styles.ExtraTechnologyContentCards>
              {complementaryTechnologies.map(tech => (
                <Styles.ExtraTechnology key={tech.key}>
                  <IconedCard
                    name={tech.name}
                    description={tech.description}
                    icon={tech.icon}
                    link={tech.link}
                  />
                </Styles.ExtraTechnology>
              ))}
            </Styles.ExtraTechnologyContentCards>
          </Styles.ExtraTechnologyWrapper>
          {/**/}
        </ScreenWrapper>
      </Styles.TechnologiesContent>
    </section>
  );
};

export { TechnologiesSection };
