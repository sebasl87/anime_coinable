export interface MenuMobileProps {
    handleClick?: () => void;
    isMobile?: boolean;
    historyBack?: string;
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