import type { PropertyValue } from '@stitches/react';

import { theme } from '@theme/theme';
import { ThemeColorName } from '@theme/theme.types';

export const utils = {
  // padding
  pa: (value: PropertyValue<'padding'>) => ({ padding: value }),
  pt: (value: PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
  pr: (value: PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
  pb: (value: PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
  pl: (value: PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
  px: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  // margin
  ma: (value: PropertyValue<'margin'>) => ({ margin: value }),
  mt: (value: PropertyValue<'marginTop'>) => ({ marginTop: value }),
  mr: (value: PropertyValue<'marginRight'>) => ({ marginRight: value }),
  mb: (value: PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
  ml: (value: PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
  mx: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value,
  }),

  // colors
  bg: (value: PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),

  // borders
  br: (value: PropertyValue<'borderRadius'>) => ({ borderRadius: value }),
};

export const getThemeColor = (color: ThemeColorName): string => {
  return theme.colors[color].value as unknown as string;
};
