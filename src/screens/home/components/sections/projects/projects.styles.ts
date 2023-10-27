import { styled } from '@theme/theme';

export const ProjectsSectionContent = styled('div', {
  width: '100%',
  position: 'relative',
  pb: '2rem',
});

export const ProjectsWrapper = styled('div', {
  width: '100%',
  position: 'relative',
});

export const ProjectsSubtitle = styled('p', {
  width: '100%',
  position: 'relative',
  color: '$text1',
  margin: 0,
  padding: 0,
  my: '$3',
});

export const ProjectsContent = styled('div', {
  width: '100%',
  position: 'relative',
  py: '2rem',
  display: 'grid',
  gap: '$10',
  gridTemplateColumns: 'repeat(4, 1fr)',

  '@900': { gridTemplateColumns: 'repeat(3, 1fr)' },
  '@768': { gridTemplateColumns: 'repeat(2, 1fr)', gap: '$10' },
  '@500': { gridTemplateColumns: 'repeat(1, 1fr)' },
});
