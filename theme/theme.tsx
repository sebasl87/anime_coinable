/* eslint-disable default-case */
import { css, SerializedStyles } from '@emotion/react';

interface IBreakpoints {
  [index: string]: string;
}
interface IColors {
  [index: string]: string;
}
interface ITextTypes {
  [index: string]: SerializedStyles;
}

interface ITheme {
  breakpoints: IBreakpoints;
  colors: IColors;
  textTypes: ITextTypes;
  spaces: (arg: number) => string;
}

const theme: ITheme = {
  breakpoints: {
    sm: '@media (max-width: 600px)',
    md: '@media (min-width: 601px)',
    ll: '@media (min-width: 905px)',
    lg: '@media (min-width: 1240px)',
    xl: '@media (min-width: 1921px)',
  },
  colors: {
    gradientBgMainSendTo:
      'radial-gradient(66.56% 353.34% at 76.39% 37.44%, #F3EAFF 0%, #F9F5FF 100%)',
    mainFooter: '#5333ea',
    dateColor: '#8b8b9d',
    primary: '#233362',
    main: '#4e34e1',
    text: '#4F5C81',
    darkText: '#00194D',
    gray400: '#e5e5e5',
    gray100: '#fafaff',
    background: '#f4f4ff',
    secundary: 'rgba(35, 51, 98, 0.50)',
    disabledText: 'rgba(35, 51, 98, 0.25)',
    contrastText: '#ffffff',
    backgroundMenu: '#F5F5FB',
    disabledCard: 'rgba(255, 255, 255, 0.6)',
    menuDescription: '#9199B0',
    backImage: '#f6f6fb',
    disabled: '#C6CAD7',
    black: '#000C2E',
  },
  spaces: (number): string => {
    const value = `${number}rem`;
    return value;
  },
  textTypes: {
    'H1-w700': css`
      font-family: Inter, sans-serif;
      font-size: 53px;
      font-stretch: normal;
      font-style: normal;
      font-weight: 700;
      line-height: 52px;
    `,
    'H2-w700': css`
      font-family: Inter, sans-serif;
      font-size: 48px;
      font-stretch: normal;
      font-style: normal;
      font-weight: 700;
      line-height: 136%;
    `,
    'H3-w700': css`
      font-family: Inter, sans-serif;
      font-size: 24px;
      font-stretch: normal;
      font-style: normal;
      font-weight: 700;
      letter-spacing: normal;
      line-height: 44px;
    `,
    'H3-w700-53': css`
      font-family: Inter, sans-serif;
      font-size: 53px;
      font-stretch: normal;
      font-style: normal;
      font-weight: 700;
      letter-spacing: normal;
      line-height: 52px;
    `,
  } as ITextTypes,
};

export default theme;
