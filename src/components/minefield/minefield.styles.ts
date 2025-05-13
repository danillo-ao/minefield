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
  gap: '$3',
  py: '$10',
});

export const MineFieldAvailablePinsContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: '$3',
  py: '$2',
});

export const MineFieldAvailablePins = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',
  pa: '$2',
  gap: '$2',
  borderRadius: '$1',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000',
});

export const MineFieldInputOptionContent = styled('div', {
  display: 'flex',
  width: 150,
  height: 56,
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

export const MineFieldInputOption = styled('input', {
  display: 'flex',
  width: '100%',
  height: 40,
  borderRadius: '$1',
  border: 'none',
  pa: '$2',
});

export const MineFieldButtonOption = styled('button', {
  display: 'flex',
  cursor: 'pointer',
  width: '100%',
  height: 40,
  borderRadius: '$1',
  border: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  pa: '$2',
  fontWeight: 'bold',
  color: '#fff',
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

export const WinContent = styled('div', {
  width: '100%',
  height: '100%',
  display: 'none',
  position: 'fixed',
  flexDirection: 'column',
  gap: '$4',
  alignItems: 'center',
  justifyContent: 'center',
  left: 0,
  top: 0,
  backgroundColor: 'rgba(0,0,0,0.8)',
});

export const WinContentLabel = styled('p', {
  color: '#fff',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: 25,
  textShadow:
    '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
});
