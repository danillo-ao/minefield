import { styled } from '@theme/theme';

export const ContactContent = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  pb: '2rem',
});

export const ContactSubtitle = styled('div', {
  width: '100%',
  position: 'relative',
  color: '$text1',
  margin: 0,
  padding: 0,
  py: '$3',
});

export const ContactGrid = styled('div', {
  width: '100%',
  position: 'relative',
  py: '2rem',
  display: 'grid',
  gridGap: '$4',
  gridTemplateColumns: 'repeat(5, 1fr)',

  '@900': { gridTemplateColumns: 'repeat(4, 1fr)' },
  '@650': { gridTemplateColumns: 'repeat(3, 1fr)', pb: 0 },
  '@560': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@420': { gridTemplateColumns: 'repeat(1, 1fr)' },
});
