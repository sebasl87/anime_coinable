import { ElementType } from 'react';

export interface HeaderContentProps {
  handleClick?: () => void;
  isMobile?: boolean;
  historyBack?: string;
}
export interface CalendarDateProps {
  isMobile?: boolean;
}
export interface MediaProps {
  ll?: string;
  lg?: string;
  md?: string;
  sm?: string;
}

export interface MediaPropsInt {
  ll?: number;
  lg?: number;
  md?: number;
  sm?: number;
}

export interface IDivMaster {
  scrollDesignDisable?: boolean;
  scrollSnapAlign?: string;
  overflowX?: string | MediaProps;
  transition?: string | MediaProps;
  top?: string | MediaProps;
  right?: string | MediaProps;
  bottom?: string | MediaProps;
  left?: string | MediaProps;
  children?: React.ReactNode;
  background?: string;
  padding?: string | MediaProps;
  margin?: string | MediaProps;
  justifyContent?: string | MediaProps;
  flexDirection?: string | MediaProps;
  alignItems?: string | MediaProps;
  alignSelf?: string | MediaProps;
  alignContent?: string | MediaProps;
  maxWidth?: string | MediaProps;
  maxHeight?: string | MediaProps;
  minHeight?: string | MediaProps;
  width?: string | MediaProps;
  display?: string | MediaProps;
  boxShadow?: string | MediaProps;
  overflow?: string | MediaProps;
  border?: string | MediaProps;
  borderRadius?: number | MediaPropsInt;
  position?: string | MediaProps;
  textAlign?: string | MediaProps;
  whiteSpace?: string | MediaProps;
  br?: string | MediaProps;
  onClick?: () => void;
  mb?: number | MediaPropsInt;
  mt?: number | MediaPropsInt;
  mr?: number | MediaPropsInt;
  ml?: number | MediaPropsInt;
  mx?: number | MediaPropsInt;
  my?: number | MediaPropsInt;
  pb?: number | MediaPropsInt;
  pt?: number | MediaPropsInt;
  pr?: number | MediaPropsInt;
  pl?: number | MediaPropsInt;
  px?: number | MediaPropsInt;
  py?: number | MediaPropsInt;
  zIndex?: number | MediaPropsInt;
  height?: string | MediaProps;
  order?: number | MediaPropsInt;
  boxShadowHover?: string | MediaProps;
  opacityHover?: number | MediaPropsInt;
  cursor?: string | MediaProps;
  minWidth?: string | MediaProps;
  overflowy?: string;
  rowGap?: number | MediaPropsInt;
  columnGap?: number | MediaPropsInt;
  flexWrap?: string | MediaProps;
  opacity?: number | MediaPropsInt;
  boxSizing?: 'content-box' | 'border-box' | 'inherit' | 'initial' | 'unset';
  gridTemplateColumns?: string | MediaProps;
  gridTemplateRows?: string | MediaProps;
  gap?: string | MediaProps;
}
export interface IText {
  opacity?: number;
  borderRadius?: number;
  border?: string;
  children?: React.ReactNode | string;
  display?: string | MediaProps;
  fontColor?: string;
  fontType?: string | MediaProps;
  justifyContent?: string | MediaProps;
  alignItems?: string | MediaProps;
  margin?: string | MediaProps;
  whiteSpace?: string | MediaProps;
  mb?: number | MediaPropsInt;
  ml?: number | MediaPropsInt;
  mr?: number | MediaPropsInt;
  mt?: number | MediaPropsInt;
  mx?: number | MediaPropsInt;
  my?: number | MediaPropsInt;
  padding?: string | MediaProps;
  pb?: number | MediaPropsInt;
  pl?: number | MediaPropsInt;
  pr?: number | MediaPropsInt;
  pt?: number | MediaPropsInt;
  px?: number | MediaPropsInt;
  py?: number | MediaPropsInt;
  textAlign?: string | MediaProps;
  textDecoration?: string;
  width?: string | MediaProps;
  boxShadowHover?: string | MediaProps;
  handleClick?: () => void;
  cursor?: string | MediaProps;
  colorHover?: string;
  textTransform?: string;
  tagType?: ElementType<unknown>;
  flex?: number;
  alignSelf?: string;
  minWidth?: string | MediaProps;
}

export interface ImputSearch {
  onChange?: (value: string) => void;
  placeHolder?: string;
  round?: boolean;
  size?: number;
  fullWidth?: boolean;
  align?: string;
}

export interface AnimeContextProps {
  isMobile: boolean;
}

export interface UseWindowDimensionProps {
  width: number | undefined;
  height: number | undefined;
}

export interface LayoutProps {
  children?: React.ReactNode;
}