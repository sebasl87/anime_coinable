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
  },
  colors: {
    primary: '#000000',
    main: '#4e34e1',
    text: '#4F5C81',
    darkText: '#00194D',
    gray: '#EEEEEE',
    gray100: '#BABABA',
    gray200: '#5A5A5A',
    gray300: '#929292',
    gray400: '#a7a7a7',
    gray500: '#b9b9b9',
    gray600: '#757575',
    background: '#f4f4ff',
    white: '#ffffff',
  },
  spaces: (number): string => {
    const value = `${number}rem`;
    return value;
  },
  textTypes: {
    'H1-w400': css`
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H1-w500': css`
      font-family: Inter;
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H1-w600-16': css`
      font-family: Inter;
      font-size: 14px;
      font-weight: 600;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H1-w600': css`
      font-family: Inter;
      font-size: 24px;
      font-weight: 600;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H2-w600': css`
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H2-w700': css`
      font-family: Inter;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H3-w500': css`
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H3-w500-16': css`
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H3-w600': css`
      font-family: Inter;
      font-size: 32px;
      font-weight: 600;
      line-height: 39px;
      letter-spacing: 0em;
      text-align: left;
    `,
    'H3-w600-16': css`
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    `,
  } as ITextTypes,
};

export default theme;