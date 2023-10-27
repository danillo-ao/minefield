import React from 'react';

import { text } from '@configs/text.values';
import Typewriter from 'typewriter-effect';

import * as Styles from './display-name.styles';
import { DisplayNameProps } from './display-name.types';

const DisplayName: React.FC<DisplayNameProps> = () => {
  const subtitleTexts = [
    'Desenvolvedor front end.',
    'Desenvolvedor web e mobile.',
    'Artes e desenhos.',
    'Sic Parvis Magna.',
  ];

  return (
    <Styles.DisplayNameContent>
      <Styles.DisplayNameName>{text.name}</Styles.DisplayNameName>
      <Styles.DisplayNameLabels id="label-content">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .pauseFor(2000)
              .typeString(subtitleTexts[0])
              .pauseFor(2000)
              .deleteChars(10)
              .typeString('web e mobile.')
              .pauseFor(2000)
              .deleteAll()
              .typeString(subtitleTexts[2])
              .pauseFor(2000)
              .deleteAll()
              .typeString(subtitleTexts[3])
              .pauseFor(2000)
              .start();
          }}
          options={{
            loop: true,
            delay: 60,
            deleteSpeed: 20,
          }}
        />
      </Styles.DisplayNameLabels>
    </Styles.DisplayNameContent>
  );
};

export { DisplayName };
