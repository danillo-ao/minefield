import { styled } from '@theme/theme';

export const ProjectCardIcons = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '$1',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ProjectCardIconsContent = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  gap: '$1',
});

export const ProjectCardTitle = styled('p', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  fontSize: '$4',
  lineHeight: '$4',
  transition: '$default',
});

export const ProjectCardDescription = styled('p', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  fontSize: '$3',
  lineHeight: '$3',
  color: '$text2',
  '@800': { fontSize: '$2_5' },
});

export const ProjectCardTags = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

export const ProjectCard = styled('a', {
  width: '100%',
  position: 'relative',

  borderRadius: '$1',

  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  cursor: 'pointer',
  transition: '$default',

  '&:before': {
    content: '',
    width: '50%',
    height: '50%',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '$circle',
    bg: '$primary',
    filter: 'blur(5rem)',
    opacity: 0,
    transition: '$default',
  },

  '&:hover': {
    transform: 'translateY(-4px)',

    '&:before': {
      opacity: 0.6,
    },

    [`& ${ProjectCardTitle}`]: {
      textShadow: '$default',
    },
  },
});
