import { globalCss } from '@theme/theme';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  html: {
    fontSize: 16,
  },

  body: {
    margin: 0,
    padding: 0,
    width: '100vw',
    maxWidth: '100vw',
    overflowX: 'hidden',

    bg: '$background0',
    fontFamily: '$default',
    lineHeight: '$default',
    color: '$text0',
  },

  div: {
    position: 'relative',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
  },

  a: {
    color: '$white',
    textDecoration: 'none',
  },
});
