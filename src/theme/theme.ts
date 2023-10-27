import { createStitches } from '@stitches/react';

import { themeConfig } from '@theme/theme.config';

const { styled, theme, config, globalCss, css, getCssText, keyframes } =
  createStitches(themeConfig);

export { styled, theme, config, globalCss, css, getCssText, keyframes };
