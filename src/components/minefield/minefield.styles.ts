import { keyframes, styled } from '@theme/theme';

const scaleUp = keyframes({
  '0%': { transform: 'scale(0)' },
  '99.999%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(1)' },
});

export const MineFieldContent = styled('div', {
  display: 'flex',
  flex: 1,
  height: '100%',
  flexDirection: 'column',
});

export const MineFieldOptions = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$10',
});

export const MineFieldBody = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

export const MineFieldGame = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
});

export const MineFieldRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const MineFieldCell = styled('button', {
  width: 35,
  height: 35,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 4,
  borderStyle: 'solid',
  borderBottomColor: '$borderDark',
  borderRightColor: '$borderDark',
  borderLeftColor: '$white',
  borderTopColor: '$white',
  bg: '$cellBackground',
  transform: 'scale(0)',
  transition: '0.3s ease',
  animation: `${scaleUp} 0.2s ease forwards`,
  position: 'relative',

  '&.highlight': {
    '&:before': {
      content: '',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      bg: '$red500',
      opacity: 0.2,
    },
  },

  variants: {
    pinned: {
      true: {},
      false: {
        '&:active': {
          borderWidth: 1,
          borderColor: '$borderDark',
          bg: '$cellBackground',
        },
      },
    },

    exploded: {
      true: { bg: '$exploded' },
      false: {},
    },

    revealed: {
      true: {
        borderWidth: 1,
        borderColor: '$borderDark',
        bg: '$cellBackground',
      },
    },
  },
});

export const FieldCount = styled('span', {
  display: 'flex',
  flex: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '$6',

  variants: {
    count: {
      1: { color: '#0000ff' },
      2: { color: '#0f700a' },
      3: { color: '#fb0007' },
      4: { color: '#00006d' },
      5: { color: '#6a0001' },
      6: { color: '#CD7F32' },
      7: { color: '#1d7873' },
      8: { color: '#081d22' },
    },
  },
});
