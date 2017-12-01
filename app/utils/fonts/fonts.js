// @flow

const getFontFamalyFromTheme = (theme: string): FontFamaly => {
  switch (theme) {
    case 'T':
      return { fontFamaly: 'T', src: 'T' };
    default:
      return { fontFamaly: 'D', src: 'D' };
  }
};

export default getFontFamalyFromTheme;

