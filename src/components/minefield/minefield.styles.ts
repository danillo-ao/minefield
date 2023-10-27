import { styled } from '@theme/theme';

export const MineFieldContent = styled('div', {
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
  width: 40,
  height: 40,
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
  transition: '0.3s ease',

  '&:active': {
    borderWidth: 1,
    borderColor: '$borderDark',
    bg: '$cellBackground',
  },

  variants: {
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
