import { links } from '@configs/links.configs';

import { keyframes, styled } from '@theme/theme';

const floating = keyframes({
  '50%': { transform: 'translateX(-50%) translateY(-20px)' },
});

export const HeroSectionContent = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',

  '&:before': {
    content: '',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${links.cdn}/hero-background.webp)`,
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
  },
});

export const HeroSectionContentGradients = styled('div', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0,
  overflow: 'hidden',
});

export const HeroSectionContentGradientPrimary = styled('div', {
  width: '400%',
  height: '400%',
  borderRadius: '100%',
  position: 'absolute',
  left: '10%',
  top: '10%',
  transform: 'translate(-50%, -50%)',
  opacity: 0.15,
  filter: 'blur(100px)',
  background:
    'radial-gradient(circle, rgba(0,210,240,1) 0%, rgba(252,70,107,0) 30%)',
});

export const HeroSectionContentGradientSecondary = styled('div', {
  width: '400%',
  height: '400%',
  borderRadius: '100%',
  position: 'absolute',
  right: '10%',
  top: '10%',
  transform: 'translate(50%, -50%)',
  opacity: 0.15,
  filter: 'blur(100px)',
  background:
    'radial-gradient(circle, rgba(248,45,78,1) 0%, rgba(252,70,107,0) 30%)',
});

export const HeroSectionContentGradientThird = styled('div', {
  width: '200%',
  height: '200%',
  borderRadius: '100%',
  position: 'absolute',
  left: '50%',
  top: '100%',
  transform: 'translate(-50%, -50%)',
  opacity: 0.15,
  filter: 'blur(100px)',
  background:
    'radial-gradient(circle, rgba(128, 0, 128,1) 0%, rgba(252,70,107,0) 30%)',
});

export const HeroScrollIndicator = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  left: '50%',
  bottom: '2rem',
  fontSize: '$9',
  color: '$primary',
  cursor: 'pointer',
  transform: 'translateX(-50%)',

  animation: `${floating} 3s ease-in-out infinite`,
});
