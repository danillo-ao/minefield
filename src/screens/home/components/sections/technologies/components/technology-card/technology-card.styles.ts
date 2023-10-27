import { styled } from '@theme/theme';

export const TechnologyCardIcon = styled('div', {
  position: 'relative',
  display: 'flex',
});

export const TechnologyCardDetails = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
});

export const TechnologyCardTitle = styled('h4', {
  position: 'relative',
  fontFamily: '$subtitle',
  letterSpacing: '0.1rem',
  fontSize: '$4',
  lineHeight: '$5',
  color: '$primary',
  textTransform: 'uppercase',
  transition: '$default',

  variants: {
    invert: {
      true: { textAlign: 'right' },
      false: { textAlign: 'left' },
    },
  },

  '@1080': { fontSize: '$3', lineHeight: '$4' },
});

export const TechnologyCardDescription = styled('p', {
  position: 'relative',
  display: 'flex',
  margin: 0,
  padding: 0,
  color: '$text3',
  lineHeight: '$3',
  fontSize: '$2',

  variants: {
    invert: {
      true: { textAlign: 'right' },
      false: { textAlign: 'left' },
    },
  },

  '@1080': { fontSize: '$2_5' },
});

export const TechnologyCardContent = styled('a', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$8',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$6',
  maxWidth: 300,
  cursor: 'pointer',
  transition: '$default',

  variants: {
    invert: {
      true: { flexDirection: 'row-reverse' },
      false: { flexDirection: 'row' },
    },
  },

  '&:hover': {
    transform: 'translateY(-4px)',

    [`& ${TechnologyCardTitle}`]: {
      color: '$white',
      textShadow: '$default',
    },
  },

  '& .technology-card-motion': {
    display: 'flex',
    flexDirection: 'row',
    gap: '$8',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
