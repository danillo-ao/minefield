import { links } from '@configs/links.configs';

import { styled } from '@theme/theme';

export const AboutSection = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  bg: '$background3',
  overflowX: 'hidden',

  '&:before': {
    content: '',
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: '0',
    bottom: 0,
    backgroundImage: `url(${links.cdn}/about-me-photo-horizontal.webp)`,
    backgroundPosition: 'right',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transition: '$default',

    '@1000': { right: '-5%' },
    '@960': {
      opacity: 0.9,
      right: '-20%',
      backgroundSize: 'cover',
      width: '120%',
    },

    '@850': {
      opacity: 1,
      right: 0,
      backgroundSize: 'contain',
      width: '100%',
      backgroundPosition: 'bottom',
      backgroundImage: `url(${links.cdn}/about-me-photo-vertical.webp)`,
    },

    '@560': { backgroundSize: '130%' },
    '@480': { backgroundSize: '140%' },
  },
});

export const AboutSectionContent = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '4rem',
  alignItems: 'center',

  '@850': { flexDirection: 'column' },

  '& .about-section-content-description': {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    color: '$text0',
    py: '4rem',
  },
});

export const AboutDescription = styled('p', {
  width: '100%',
  position: 'relative',
  margin: 0,
  padding: 0,
  lineHeight: '$7',
  transition: '$default',

  '@800': { fontSize: '$2_5', lineHeight: '$5' },
});

export const AboutSectionContentProfile = styled('div', {
  minWidth: 350,
  height: 350,
  borderRadius: '$circle',
  position: 'relative',
  display: 'flex',
  transition: '$default',

  '@1080': { minWidth: 400 },
  '@1045': { minWidth: 450 },
  '@1000': { minWidth: 350 },
  '@850': { minWidth: 250, height: 250 },
  '@780': { minWidth: 200, height: 200 },
  '@650': { minWidth: 150, height: 150 },
  '@560': { minWidth: 150, height: 150 },
  '@400': { minWidth: 150, height: 100 },
});
