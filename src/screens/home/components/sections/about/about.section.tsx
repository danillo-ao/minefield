import React from 'react';

// import { MotionDiv } from '@components/motion';
import { ScreenWrapper } from '@components/screen/screen.comp';
import { SectionTitle } from '@components/text';

import * as Styles from './about.styles';

const AboutSection: React.FC = () => {
  return (
    <section id="about-section">
      <Styles.AboutSection>
        <ScreenWrapper>
          {/**/}
          <Styles.AboutSectionContent>
            <div className="about-section-content-description">
              {/*<MotionDiv*/}
              {/*  className="about-section-content-description"*/}
              {/*  viewport={{ once: true, amount: 0.5 }}*/}
              {/*>*/}
              <SectionTitle>Sobre mim</SectionTitle>

              <Styles.AboutDescription>
                Meu nome é Danillo e tenho 24 anos. Trabalho na área de
                tecnologia há cerca de 7 anos. Minha jornada na programação
                começou aos 14 anos, quando tive meu primeiro contato técnico
                com o assunto em 2014, na Etec de Itaquaquecetuba, onde me
                formei em 2015. Aos 16 anos, tive o prazer de trabalhar no meu
                primeiro projeto profissional, desenvolvendo o sistema para o
                site institucional da Etec local.
                <br />
                <br />
                Mas vamos deixar de lado os números e o papo de nerd por um
                momento... Fora do trabalho, dedico a maior parte do meu tempo
                livre ao desenho. A arte em geral é um elemento fundamental na
                minha vida, independentemente do formato - música, filmes ou
                desenhos. Além disso, gosto de colecionar algumas coisas, jogar
                joguinhos online e, quem sabe, ler um livro de vez em quando.
              </Styles.AboutDescription>
              {/*</MotionDiv>*/}
            </div>

            <Styles.AboutSectionContentProfile />
          </Styles.AboutSectionContent>
          {/**/}
        </ScreenWrapper>
      </Styles.AboutSection>
    </section>
  );
};

export { AboutSection };
