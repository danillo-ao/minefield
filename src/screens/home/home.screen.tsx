import React from 'react';

import { Minefield } from '@components/minefield';

import * as Styles from './home.styles';

const HomeScreen = () => {
  return (
    <Styles.HomeScreen>
      <Minefield />
    </Styles.HomeScreen>
  );
};

export { HomeScreen };
