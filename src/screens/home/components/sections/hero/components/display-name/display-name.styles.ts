import { styled } from '@theme/theme';

export const DisplayNameContent = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$4',
});

export const DisplayNameName = styled('h1', {
  color: '$text0',
  fontFamily: '$name',
  fontSize: '5rem',
  lineHeight: '5rem',
  fontWeight: 'bold',
  letterSpacing: '0.5rem',
  mb: '$4',
  textAlign: 'center',
  transition: '$default',

  '@800': {
    fontSize: '4rem',
    lineHeight: '4rem',
  },
  '@480': {
    fontSize: '3rem',
    lineHeight: '3rem',
  },
  '@400': {
    fontSize: '2.5rem',
    lineHeight: '2.5rem',
  },
});

export const DisplayNameLabels = styled('span', {
  color: '$primary',
  fontFamily: '$title',
  position: 'relative',
  fontSize: '1.5rem',
  lineHeight: '1.5rem',
  fontWeight: '500',
  transition: '$default',
  textAlign: 'center',

  '@800': {
    fontSize: '1.3rem',
    lineHeight: '1.3rem',
  },

  '@480': {
    fontSize: '1rem',
    lineHeight: '1rem',
  },
});
