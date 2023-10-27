// import { utils } from 'prettier/doc';
import { themeMap } from '@theme/theme.map';
import { units } from '@theme/theme.units';
import { utils } from '@theme/theme.utils';
import { colors } from '@theme/values/colors';
import { fontSizes, fonts, lineHeights } from '@theme/values/fonts';
import { media } from '@theme/values/media';
import { radii } from '@theme/values/radii';
import { shadows } from '@theme/values/shadows';
import { space } from '@theme/values/space';
import { transitions } from '@theme/values/transitions';
import { zIndices } from '@theme/values/zindexes';

export const themeConfig = {
  theme: {
    colors,
    fonts,
    fontSizes,
    lineHeights,
    radii,
    space,
    zIndices,
    units,
    transitions,
    shadows,
  },
  media,
  utils,
  themeMap,
};
