import { keyframes, styled } from '@theme/theme';

const spinRight = keyframes({
  '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
});

const spinLeft = keyframes({
  '100%': { transform: 'translate(-50%, -50%) rotate(-360deg)' },
});

export const TechnologiesGlobe = styled('div', {
  width: 400,
  height: 400,
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  borderRadius: '$circle',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  gap: '$1',
  pl: '0.5rem',
  transition: '$default',

  '@1080': { width: 350, height: 350 },
});

export const TechnologiesGlobeCircles = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '120%',
  height: '120%',
  transform: 'translate(-50%, -50%)',
});

export const TechnologiesGlobeCircle = styled('img', {
  position: 'absolute',
  left: '50%',
  top: '50%',
  with: '100%',
  height: '100%',
  transform: 'translate(-50%, -50%)',

  variants: {
    number: {
      1: { width: '100%', height: '100%' },
      2: { width: '75%', height: '75%' },
      3: { width: '85%', height: '85%' },
      4: { width: '90%', height: '90%' },
      5: { width: '80%', height: '80%' },
    },

    spin: {
      left: { animation: `${spinLeft} 25s linear infinite` },
      right: { animation: `${spinRight} 25s linear infinite` },
    },

    animationSpeed: {
      fast: { animationDuration: '15s !important' },
      slow: { animationDuration: '40s !important' },
    },
  },
});

export const TechnologiesGlobeTechTitle = styled('h3', {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: '$subtitle',
  letterSpacing: '0.6rem',
  fontSize: '$7',
  lineHeight: '$8',
  transition: '$default',

  '@1080': {
    fontSize: '$6',
    lineHeight: '$7',
  },
});

export const TechnologiesGlobeTechSubtitle = styled('p', {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
  padding: 0,
  margin: 0,
  color: '$text1',
  letterSpacing: '1rem',
  transition: '$default',

  '@1080': {
    fontSize: '$2',
    lineHeight: '$3',
  },
});
