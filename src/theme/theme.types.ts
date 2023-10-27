import { colors } from '@theme/values/colors';
import { fontSizes, fonts } from '@theme/values/fonts';
import { space } from '@theme/values/space';

export type StyledType<T> = { children?: any } & T;

export type ThemeColorName = keyof typeof colors;
export type StitchesSpace = `$${keyof typeof space}`;
export type StitchesColor = `$${keyof typeof colors}`;
export type StitchesFonts = `$${keyof typeof fonts}`;
export type StitchesFontSizes = `$${keyof typeof fontSizes}`;

export type ThemeUnits = {};
