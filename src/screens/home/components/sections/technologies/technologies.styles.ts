import { styled } from '@theme/theme';

export const TechnologiesContent = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flex: 1,
  overflowX: 'hidden',

  '&:before': {
    content: '',
    width: '100%',
    height: '50%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, $black 97%)',
  },
});

export const TechnologiesGlobeWrapperMobile = styled('div', {
  width: '100%',
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  pt: '5rem',
  pb: '$8',

  '@960': { display: 'flex' },
});

export const TechnologiesGlobeContent = styled('div', {
  width: '100%',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '6rem',
  py: '8rem',

  '@1080': { gap: '4rem' },
  '@960': { pt: '0px', pb: '5rem' },
  '@650': { flexDirection: 'column', gap: '$1', pb: '4rem' },
});

export const TechnologiesGlobeColumn = styled('div', {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  gap: '$10',

  '@650': { gap: '$1', width: '100%' },
});

export const TechnologiesGlobeWrapper = styled('div', {
  display: 'flex',

  '@960': { display: 'none' },
});

export const TechnologyWrapper = styled('div', {
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: '$primary',
  borderStyle: 'solid',
  position: 'relative',
});

export const ExtraTechnologyWrapper = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const ExtraTechnologyTitle = styled('h5', {
  width: '100%',
  position: 'relative',
  textTransform: 'uppercase',
  fontFamily: '$subtitle',
  letterSpacing: '0.2rem',
  fontSize: '$3',
  lineHeight: '$5',
});
export const ExtraTechnologySubtitle = styled('p', {
  width: '100%',
  position: 'relative',
  fontSize: '$3',
  margin: 0,
  padding: 0,
  color: '$text3',
  mt: '$2',
  mb: '$2',
  transition: '$default',

  '@900': { fontSize: '$2_5' },
});

export const ExtraTechnologyContentCards = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'grid',
  py: '2rem',
  gridGap: '$4',
  gridTemplateColumns: 'repeat(5, 1fr)',
  overflowY: 'hidden',

  '@900': { gridTemplateColumns: 'repeat(4, 1fr)' },
  '@800': { gridTemplateColumns: 'repeat(3, 1fr)' },
  '@560': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@420': { gridTemplateColumns: 'repeat(1, 1fr)', gridGap: '$1' },
});

export const ExtraTechnology = styled('div', {
  position: 'relative',
  width: '100%',
  transition: '$default',
});
