import { IDivMaster } from '@interfaces';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@theme';
const { spaces } = theme;

export const DivMaster = styled.div<IDivMaster>`
  overflow-x: ${({ overflowX }) => typeof overflowX === 'string' && overflowX};
  scroll-snap-align: ${({ scrollSnapAlign }) =>
    typeof scrollSnapAlign === 'string' && scrollSnapAlign};
  transition: ${({ transition }) =>
    typeof transition === 'string' && transition};
  top: ${({ top }) => typeof top === 'string' && top};
  right: ${({ right }) => typeof right === 'string' && right};
  bottom: ${({ bottom }) => typeof bottom === 'string' && bottom};
  left: ${({ left }) => typeof left === 'string' && left};
  flex-wrap: ${({ flexWrap }) => typeof flexWrap === 'string' && flexWrap};
  display: ${({ display }) => typeof display === 'string' && display};
  ${({ rowGap }) =>
    typeof rowGap === 'number' &&
    css`
      row-gap: ${spaces(rowGap)};
    `};
  ${({ columnGap }) =>
    typeof columnGap === 'number' &&
    css`
      column-gap: ${spaces(columnGap)};
    `};
  border-radius: ${({ br }) => typeof br === 'string' && br};
  flex-wrap: ${({ flexWrap }) => typeof flexWrap === 'string' && flexWrap};
  flex-direction: ${({ flexDirection }) =>
    typeof flexDirection === 'string' && flexDirection};
  flex-wrap: ${({ flexWrap }) => typeof flexWrap === 'string' && flexWrap};
  justify-content: ${({ justifyContent }) =>
    typeof justifyContent === 'string' && justifyContent};
  align-items: ${({ alignItems }) =>
    typeof alignItems === 'string' && alignItems};
  align-self: ${({ alignSelf }) => typeof alignSelf === 'string' && alignSelf};
  align-content: ${({ alignContent }) =>
    typeof alignContent === 'string' && alignContent};
  text-align: ${({ textAlign }) => typeof textAlign === 'string' && textAlign};
  background: ${({ background }) => background};
  padding: ${({ padding }) => typeof padding === 'string' && padding};
  margin: ${({ margin }) => typeof margin === 'string' && margin};
  width: ${({ width }) => typeof width === 'string' && width};
  max-width: ${({ maxWidth }) => typeof maxWidth === 'string' && maxWidth};
  box-shadow: ${({ boxShadow }) => typeof boxShadow === 'string' && boxShadow};
  overflow: ${({ overflow }) => typeof overflow === 'string' && overflow};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'number' && spaces(borderRadius)};
  position: ${({ position }) => typeof position === 'string' && position};
  min-height: ${({ minHeight }) => typeof minHeight === 'string' && minHeight};
  max-height: ${({ maxHeight }) => typeof maxHeight === 'string' && maxHeight};
  min-width: ${({ minWidth }) => typeof minWidth === 'string' && minWidth};
  white-space: ${({ whiteSpace }) =>
    typeof whiteSpace === 'string' && whiteSpace};
  height: ${({ height }) => typeof height === 'string' && height};
  border: ${({ border }) => typeof border === 'string' && border};
  overflow-y: ${({ overflowy }) => typeof overflowy === 'string' && overflowy};
  opacity: ${({ opacity }) => typeof opacity === 'number' && opacity};
  ${({ mx }) =>
    typeof mx === 'number' &&
    css`
      margin-right: ${spaces(mx)};
      margin-left: ${spaces(mx)};
    `};
  ${({ my }) =>
    typeof my === 'number' &&
    css`
      margin-top: ${spaces(my)};
      margin-bottom: ${spaces(my)};
    `};
  ${({ px }) =>
    typeof px === 'number' &&
    css`
      padding-right: ${spaces(px)};
      padding-left: ${spaces(px)};
    `};
  ${({ py }) =>
    typeof py === 'number' &&
    css`
      padding-top: ${spaces(py)};
      padding-bottom: ${spaces(py)};
    `};
  margin-bottom: ${({ mb }) => typeof mb === 'number' && spaces(mb)};
  margin-right: ${({ mr }) => typeof mr === 'number' && spaces(mr)};
  margin-top: ${({ mt }) => typeof mt === 'number' && spaces(mt)};
  margin-left: ${({ ml }) => typeof ml === 'number' && spaces(ml)};
  padding-bottom: ${({ pb }) => typeof pb === 'number' && spaces(pb)};
  padding-right: ${({ pr }) => typeof pr === 'number' && spaces(pr)};
  padding-top: ${({ pt }) => typeof pt === 'number' && spaces(pt)};
  padding-left: ${({ pl }) => typeof pl === 'number' && spaces(pl)};
  z-index: ${({ zIndex }) => typeof zIndex === 'number' && zIndex};
  order: ${({ order }) => typeof order === 'number' && order};
  cursor: ${({ cursor }) => typeof cursor === 'string' && cursor};
  &:hover {
    box-shadow: ${({ boxShadowHover }) =>
    typeof boxShadowHover === 'string' && boxShadowHover};
    opacity: ${({ opacityHover }) =>
    typeof opacityHover === 'number' && opacityHover};
  }

  ${({ scrollDesignDisable }) =>
    scrollDesignDisable &&
    css`
      ::-webkit-scrollbar {
        display: none;
      }
    `}
  grid-template-columns: ${({ gridTemplateColumns }) =>
    typeof gridTemplateColumns === 'string' && gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) =>
    typeof gridTemplateRows === 'string' && gridTemplateRows};

  gap: ${({ gap }) => typeof gap === 'string' && gap};

  ${theme.breakpoints.sm} {
    overflow-x: ${({ overflowX }) =>
    typeof overflowX !== 'string' && overflowX?.sm && overflowX.sm};
    transition: ${({ transition }) =>
    typeof transition !== 'string' && transition?.sm && transition.sm};
    top: ${({ top }) => typeof top !== 'string' && top?.sm && top.sm};
    right: ${({ right }) => typeof right !== 'string' && right?.sm && right.sm};
    bottom: ${({ bottom }) =>
    typeof bottom !== 'string' && bottom?.sm && bottom.sm};
    left: ${({ left }) => typeof left !== 'string' && left?.sm && left.sm};
    ${({ opacity }) =>
    typeof opacity !== 'number' &&
    opacity?.sm &&
    css`
        opacity: ${spaces(opacity?.sm)};
      `};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.sm && flexWrap.sm};
    display: ${({ display }) =>
    typeof display !== 'string' && display?.sm && display.sm};
    ${({ rowGap }) =>
    typeof rowGap !== 'number' &&
    rowGap?.sm &&
    css`
        row-gap: ${spaces(rowGap?.sm)};
      `};
    ${({ columnGap }) =>
    typeof columnGap !== 'number' &&
    columnGap?.sm &&
    css`
        column-gap: ${spaces(columnGap?.sm)};
      `};
    border-radius: ${({ br }) => typeof br !== 'string' && br?.sm && br?.sm};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.sm && flexWrap?.sm};
    flex-direction: ${({ flexDirection }) =>
    typeof flexDirection !== 'string' &&
    flexDirection?.sm &&
    flexDirection?.sm};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.sm && flexWrap?.sm};
    justify-content: ${({ justifyContent }) =>
    typeof justifyContent !== 'string' &&
    justifyContent?.sm &&
    justifyContent?.sm};
    align-items: ${({ alignItems }) =>
    typeof alignItems !== 'string' && alignItems?.sm && alignItems?.sm};
    align-content: ${({ alignContent }) =>
    typeof alignContent !== 'string' && alignContent?.sm && alignContent?.sm};
    text-align: ${({ textAlign }) =>
    typeof textAlign !== 'string' && textAlign?.sm && textAlign?.sm};
    padding: ${({ padding }) =>
    typeof padding !== 'string' && padding?.sm && padding?.sm};
    margin: ${({ margin }) =>
    typeof margin !== 'string' && margin?.sm && margin?.sm};
    width: ${({ width }) =>
    typeof width !== 'string' && width?.sm && width?.sm};
    max-width: ${({ maxWidth }) =>
    typeof maxWidth !== 'string' && maxWidth?.sm && maxWidth?.sm};
    min-width: ${({ minWidth }) =>
    typeof minWidth !== 'string' && minWidth?.sm && minWidth?.sm};
    min-height: ${({ minHeight }) =>
    typeof minHeight !== 'string' && minHeight?.sm && minHeight?.sm};
    box-shadow: ${({ boxShadow }) =>
    typeof boxShadow !== 'string' && boxShadow?.sm && boxShadow?.sm};
    overflow: ${({ overflow }) =>
    typeof overflow !== 'string' && overflow?.sm && overflow?.sm};
    position: ${({ position }) =>
    typeof position !== 'string' && position?.sm && position?.sm};
    white-space: ${({ whiteSpace }) =>
    typeof whiteSpace !== 'string' && whiteSpace?.sm && whiteSpace?.sm};
    height: ${({ height }) =>
    typeof height !== 'string' && height?.sm && height?.sm};
    border: ${({ border }) =>
    typeof border !== 'string' && border?.sm && border?.sm};
    border-radius: ${({ borderRadius }) =>
    typeof borderRadius !== 'number' &&
    borderRadius?.sm &&
    spaces(borderRadius?.sm)};
    ${({ mx }) =>
    typeof mx !== 'number' &&
    mx?.sm &&
    css`
        margin-right: ${spaces(mx?.sm)};
        margin-left: ${spaces(mx?.sm)};
      `};
    ${({ my }) =>
    typeof my !== 'number' &&
    my?.sm &&
    css`
        margin-top: ${spaces(my?.sm)};
        margin-bottom: ${spaces(my?.sm)};
      `};
    ${({ px }) =>
    typeof px !== 'number' &&
    px?.sm &&
    css`
        padding-right: ${spaces(px?.sm)};
        padding-left: ${spaces(px?.sm)};
      `};
    ${({ py }) =>
    typeof py !== 'number' &&
    py?.sm &&
    css`
        padding-top: ${spaces(py?.sm)};
        padding-bottom: ${spaces(py?.sm)};
      `};
    margin-bottom: ${({ mb }) =>
    typeof mb !== 'number' && mb?.sm && spaces(mb?.sm)};
    margin-right: ${({ mr }) =>
    typeof mr !== 'number' && mr?.sm && spaces(mr?.sm)};
    margin-top: ${({ mt }) =>
    typeof mt !== 'number' && mt?.sm && spaces(mt?.sm)};
    margin-left: ${({ ml }) =>
    typeof ml !== 'number' && ml?.sm && spaces(ml?.sm)};
    padding-bottom: ${({ pb }) =>
    typeof pb !== 'number' && pb?.sm && spaces(pb?.sm)};
    padding-right: ${({ pr }) =>
    typeof pr !== 'number' && pr?.sm && spaces(pr?.sm)};
    padding-top: ${({ pt }) =>
    typeof pt !== 'number' && pt?.sm && spaces(pt?.sm)};
    padding-left: ${({ pl }) =>
    typeof pl !== 'number' && pl?.sm && spaces(pl?.sm)};
    z-index: ${({ zIndex }) =>
    typeof zIndex !== 'number' && zIndex?.sm && zIndex?.sm};
    order: ${({ order }) =>
    typeof order !== 'number' && order?.sm && order?.sm};
    grid-template-columns: ${({ gridTemplateColumns }) =>
    typeof gridTemplateColumns !== 'string' &&
    gridTemplateColumns?.sm &&
    gridTemplateColumns.sm};
    grid-template-rows: ${({ gridTemplateRows }) =>
    typeof gridTemplateRows !== 'string' &&
    gridTemplateRows?.sm &&
    gridTemplateRows.sm};

    gap: ${({ gap }) => typeof gap !== 'string' && gap?.sm && gap.sm};
  }
  ${theme.breakpoints.md} {
    overflow-x: ${({ overflowX }) =>
    typeof overflowX !== 'string' && overflowX?.md && overflowX.md};
    transition: ${({ transition }) =>
    typeof transition !== 'string' && transition?.md && transition.md};
    top: ${({ top }) => typeof top !== 'string' && top?.md && top.md};
    right: ${({ right }) => typeof right !== 'string' && right?.md && right.md};
    bottom: ${({ bottom }) =>
    typeof bottom !== 'string' && bottom?.md && bottom.md};
    left: ${({ left }) => typeof left !== 'string' && left?.md && left.md};
    ${({ opacity }) =>
    typeof opacity !== 'number' &&
    opacity?.md &&
    css`
        opacity: ${spaces(opacity?.md)};
      `};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.md && flexWrap.md};
    display: ${({ display }) =>
    typeof display !== 'string' && display?.md && display.md};
    ${({ rowGap }) =>
    typeof rowGap !== 'number' &&
    rowGap?.md &&
    css`
        row-gap: ${spaces(rowGap?.md)};
      `};
    ${({ columnGap }) =>
    typeof columnGap !== 'number' &&
    columnGap?.md &&
    css`
        column-gap: ${spaces(columnGap?.md)};
      `};
    border-radius: ${({ br }) => typeof br !== 'string' && br?.md && br?.md};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.md && flexWrap?.md};
    flex-direction: ${({ flexDirection }) =>
    typeof flexDirection !== 'string' &&
    flexDirection?.md &&
    flexDirection?.md};
    justify-content: ${({ justifyContent }) =>
    typeof justifyContent !== 'string' &&
    justifyContent?.md &&
    justifyContent?.md};
    align-items: ${({ alignItems }) =>
    typeof alignItems !== 'string' && alignItems?.md && alignItems?.md};
    align-content: ${({ alignContent }) =>
    typeof alignContent !== 'string' && alignContent?.md && alignContent?.md};
    text-align: ${({ textAlign }) =>
    typeof textAlign !== 'string' && textAlign?.md && textAlign?.md};
    padding: ${({ padding }) =>
    typeof padding !== 'string' && padding?.md && padding?.md};
    margin: ${({ margin }) =>
    typeof margin !== 'string' && margin?.md && margin?.md};
    width: ${({ width }) =>
    typeof width !== 'string' && width?.md && width?.md};
    max-width: ${({ maxWidth }) =>
    typeof maxWidth !== 'string' && maxWidth?.md && maxWidth?.md};
    min-width: ${({ minWidth }) =>
    typeof minWidth !== 'string' && minWidth?.md && minWidth?.md};
    min-height: ${({ minHeight }) =>
    typeof minHeight !== 'string' && minHeight?.md && minHeight?.md};
    box-shadow: ${({ boxShadow }) =>
    typeof boxShadow !== 'string' && boxShadow?.md && boxShadow?.md};
    overflow: ${({ overflow }) =>
    typeof overflow !== 'string' && overflow?.md && overflow?.md};
    position: ${({ position }) =>
    typeof position !== 'string' && position?.md && position?.md};
    white-space: ${({ whiteSpace }) =>
    typeof whiteSpace !== 'string' && whiteSpace?.md && whiteSpace?.md};
    border: ${({ border }) =>
    typeof border !== 'string' && border?.md && border?.md};
    height: ${({ height }) =>
    typeof height !== 'string' && height?.md && height?.md};
    border-radius: ${({ borderRadius }) =>
    typeof borderRadius !== 'number' &&
    borderRadius?.md &&
    spaces(borderRadius?.md)};
    ${({ mx }) =>
    typeof mx !== 'number' &&
    mx?.md &&
    css`
        margin-right: ${spaces(mx?.md)};
        margin-left: ${spaces(mx?.md)};
      `};
    ${({ my }) =>
    typeof my !== 'number' &&
    my?.md &&
    css`
        margin-top: ${spaces(my?.md)};
        margin-bottom: ${spaces(my?.md)};
      `};
    ${({ px }) =>
    typeof px !== 'number' &&
    px?.md &&
    css`
        padding-right: ${spaces(px?.md)};
        padding-left: ${spaces(px?.md)};
      `};
    ${({ py }) =>
    typeof py !== 'number' &&
    py?.md &&
    css`
        padding-top: ${spaces(py?.md)};
        padding-bottom: ${spaces(py?.md)};
      `};
    margin-bottom: ${({ mb }) =>
    typeof mb !== 'number' && mb?.md && spaces(mb?.md)};
    margin-right: ${({ mr }) =>
    typeof mr !== 'number' && mr?.md && spaces(mr?.md)};
    margin-top: ${({ mt }) =>
    typeof mt !== 'number' && mt?.md && spaces(mt?.md)};
    margin-left: ${({ ml }) =>
    typeof ml !== 'number' && ml?.md && spaces(ml?.md)};
    padding-bottom: ${({ pb }) =>
    typeof pb !== 'number' && pb?.md && spaces(pb?.md)};
    padding-right: ${({ pr }) =>
    typeof pr !== 'number' && pr?.md && spaces(pr?.md)};
    padding-top: ${({ pt }) =>
    typeof pt !== 'number' && pt?.md && spaces(pt?.md)};
    padding-left: ${({ pl }) =>
    typeof pl !== 'number' && pl?.md && spaces(pl?.md)};
    z-index: ${({ zIndex }) =>
    typeof zIndex !== 'number' && zIndex?.md && zIndex?.md};
    order: ${({ order }) =>
    typeof order !== 'number' && order?.md && order?.md};
    grid-template-columns: ${({ gridTemplateColumns }) =>
    typeof gridTemplateColumns !== 'string' &&
    gridTemplateColumns?.md &&
    gridTemplateColumns.md};
    grid-template-rows: ${({ gridTemplateRows }) =>
    typeof gridTemplateRows !== 'string' &&
    gridTemplateRows?.md &&
    gridTemplateRows.md};
    gap: ${({ gap }) => typeof gap !== 'string' && gap?.md && gap.md};
  }
  ${theme.breakpoints.ll} {
    overflow-x: ${({ overflowX }) =>
    typeof overflowX !== 'string' && overflowX?.ll && overflowX.ll};
    transition: ${({ transition }) =>
    typeof transition !== 'string' && transition?.ll && transition.ll};
    top: ${({ top }) => typeof top !== 'string' && top?.ll && top.ll};
    right: ${({ right }) => typeof right !== 'string' && right?.ll && right.ll};
    bottom: ${({ bottom }) =>
    typeof bottom !== 'string' && bottom?.ll && bottom.ll};
    left: ${({ left }) => typeof left !== 'string' && left?.ll && left.ll};
    ${({ opacity }) =>
    typeof opacity !== 'number' &&
    opacity?.ll &&
    css`
        opacity: ${spaces(opacity?.ll)};
      `};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.ll && flexWrap.ll};
    display: ${({ display }) =>
    typeof display !== 'string' && display?.ll && display.ll};
    ${({ rowGap }) =>
    typeof rowGap !== 'number' &&
    rowGap?.ll &&
    css`
        row-gap: ${spaces(rowGap?.ll)};
      `};
    ${({ columnGap }) =>
    typeof columnGap !== 'number' &&
    columnGap?.ll &&
    css`
        column-gap: ${spaces(columnGap?.ll)};
      `};
    border-radius: ${({ br }) => typeof br !== 'string' && br?.ll && br?.ll};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.ll && flexWrap?.ll};
    flex-direction: ${({ flexDirection }) =>
    typeof flexDirection !== 'string' &&
    flexDirection?.ll &&
    flexDirection?.ll};
    justify-content: ${({ justifyContent }) =>
    typeof justifyContent !== 'string' &&
    justifyContent?.ll &&
    justifyContent?.ll};
    align-items: ${({ alignItems }) =>
    typeof alignItems !== 'string' && alignItems?.ll && alignItems?.ll};
    align-content: ${({ alignContent }) =>
    typeof alignContent !== 'string' && alignContent?.ll && alignContent?.ll};
    text-align: ${({ textAlign }) =>
    typeof textAlign !== 'string' && textAlign?.ll && textAlign?.ll};
    padding: ${({ padding }) =>
    typeof padding !== 'string' && padding?.ll && padding?.ll};
    margin: ${({ margin }) =>
    typeof margin !== 'string' && margin?.ll && margin?.ll};
    width: ${({ width }) =>
    typeof width !== 'string' && width?.ll && width?.ll};
    max-width: ${({ maxWidth }) =>
    typeof maxWidth !== 'string' && maxWidth?.ll && maxWidth?.ll};
    min-height: ${({ minHeight }) =>
    typeof minHeight !== 'string' && minHeight?.ll && minHeight?.ll};
    min-width: ${({ minWidth }) =>
    typeof minWidth !== 'string' && minWidth?.ll && minWidth?.ll};
    box-shadow: ${({ boxShadow }) =>
    typeof boxShadow !== 'string' && boxShadow?.ll && boxShadow?.ll};
    overflow: ${({ overflow }) =>
    typeof overflow !== 'string' && overflow?.ll && overflow?.ll};
    position: ${({ position }) =>
    typeof position !== 'string' && position?.ll && position?.ll};
    white-space: ${({ whiteSpace }) =>
    typeof whiteSpace !== 'string' && whiteSpace?.ll && whiteSpace?.ll};
    border: ${({ border }) =>
    typeof border !== 'string' && border?.ll && border?.ll};
    height: ${({ height }) =>
    typeof height !== 'string' && height?.ll && height?.ll};
    border-radius: ${({ borderRadius }) =>
    typeof borderRadius !== 'number' &&
    borderRadius?.ll &&
    spaces(borderRadius?.ll)};
    ${({ mx }) =>
    typeof mx !== 'number' &&
    mx?.ll &&
    css`
        margin-right: ${spaces(mx?.ll)};
        margin-left: ${spaces(mx?.ll)};
      `};
    ${({ my }) =>
    typeof my !== 'number' &&
    my?.ll &&
    css`
        margin-top: ${spaces(my?.ll)};
        margin-bottom: ${spaces(my?.ll)};
      `};
    ${({ px }) =>
    typeof px !== 'number' &&
    px?.ll &&
    css`
        padding-right: ${spaces(px?.ll)};
        padding-left: ${spaces(px?.ll)};
      `};
    ${({ py }) =>
    typeof py !== 'number' &&
    py?.ll &&
    css`
        padding-top: ${spaces(py?.ll)};
        padding-bottom: ${spaces(py?.ll)};
      `};
    margin-bottom: ${({ mb }) =>
    typeof mb !== 'number' && mb?.ll && spaces(mb?.ll)};
    margin-right: ${({ mr }) =>
    typeof mr !== 'number' && mr?.ll && spaces(mr?.ll)};
    margin-top: ${({ mt }) =>
    typeof mt !== 'number' && mt?.ll && spaces(mt?.ll)};
    margin-left: ${({ ml }) =>
    typeof ml !== 'number' && ml?.ll && spaces(ml?.ll)};
    padding-bottom: ${({ pb }) =>
    typeof pb !== 'number' && pb?.ll && spaces(pb?.ll)};
    padding-right: ${({ pr }) =>
    typeof pr !== 'number' && pr?.ll && spaces(pr?.ll)};
    padding-top: ${({ pt }) =>
    typeof pt !== 'number' && pt?.ll && spaces(pt?.ll)};
    padding-left: ${({ pl }) =>
    typeof pl !== 'number' && pl?.ll && spaces(pl?.ll)};
    z-index: ${({ zIndex }) =>
    typeof zIndex !== 'number' && zIndex?.ll && zIndex?.ll};
    order: ${({ order }) =>
    typeof order !== 'number' && order?.ll && order?.ll};

    grid-template-columns: ${({ gridTemplateColumns }) =>
    typeof gridTemplateColumns !== 'string' &&
    gridTemplateColumns?.ll &&
    gridTemplateColumns.ll};
    grid-template-rows: ${({ gridTemplateRows }) =>
    typeof gridTemplateRows !== 'string' &&
    gridTemplateRows?.ll &&
    gridTemplateRows.ll};
    gap: ${({ gap }) => typeof gap !== 'string' && gap?.ll && gap.ll};
  }
  ${theme.breakpoints.lg} {
    overflow-x: ${({ overflowX }) =>
    typeof overflowX !== 'string' && overflowX?.lg && overflowX.lg};
    transition: ${({ transition }) =>
    typeof transition !== 'string' && transition?.lg && transition.lg};
    top: ${({ top }) => typeof top !== 'string' && top?.lg && top.lg};
    right: ${({ right }) => typeof right !== 'string' && right?.lg && right.lg};
    bottom: ${({ bottom }) =>
    typeof bottom !== 'string' && bottom?.lg && bottom.lg};
    left: ${({ left }) => typeof left !== 'string' && left?.lg && left.lg};
    ${({ opacity }) =>
    typeof opacity !== 'number' &&
    opacity?.lg &&
    css`
        opacity: ${spaces(opacity?.lg)};
      `};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.lg && flexWrap.lg};
    display: ${({ display }) =>
    typeof display !== 'string' && display?.lg && display.lg};
    ${({ rowGap }) =>
    typeof rowGap !== 'number' &&
    rowGap?.lg &&
    css`
        row-gap: ${spaces(rowGap?.lg)};
      `};
    ${({ columnGap }) =>
    typeof columnGap !== 'number' &&
    columnGap?.lg &&
    css`
        column-gap: ${spaces(columnGap?.lg)};
      `};
    border-radius: ${({ br }) => typeof br !== 'string' && br?.lg && br?.lg};
    flex-wrap: ${({ flexWrap }) =>
    typeof flexWrap !== 'string' && flexWrap?.lg && flexWrap?.lg};
    flex-direction: ${({ flexDirection }) =>
    typeof flexDirection !== 'string' &&
    flexDirection?.lg &&
    flexDirection?.lg};
    justify-content: ${({ justifyContent }) =>
    typeof justifyContent !== 'string' &&
    justifyContent?.lg &&
    justifyContent?.lg};
    align-items: ${({ alignItems }) =>
    typeof alignItems !== 'string' && alignItems?.lg && alignItems?.lg};
    align-content: ${({ alignContent }) =>
    typeof alignContent !== 'string' && alignContent?.lg && alignContent?.lg};
    text-align: ${({ textAlign }) =>
    typeof textAlign !== 'string' && textAlign?.lg && textAlign?.lg};
    padding: ${({ padding }) =>
    typeof padding !== 'string' && padding?.lg && padding?.lg};
    margin: ${({ margin }) =>
    typeof margin !== 'string' && margin?.lg && margin?.lg};
    width: ${({ width }) =>
    typeof width !== 'string' && width?.lg && width?.lg};
    max-width: ${({ maxWidth }) =>
    typeof maxWidth !== 'string' && maxWidth?.lg && maxWidth?.lg};
    min-height: ${({ minHeight }) =>
    typeof minHeight !== 'string' && minHeight?.lg && minHeight?.lg};
    min-width: ${({ minWidth }) =>
    typeof minWidth !== 'string' && minWidth?.lg && minWidth?.lg};
    box-shadow: ${({ boxShadow }) =>
    typeof boxShadow !== 'string' && boxShadow?.lg && boxShadow?.lg};
    overflow: ${({ overflow }) =>
    typeof overflow !== 'string' && overflow?.lg && overflow?.lg};
    position: ${({ position }) =>
    typeof position !== 'string' && position?.lg && position?.lg};
    white-space: ${({ whiteSpace }) =>
    typeof whiteSpace !== 'string' && whiteSpace?.lg && whiteSpace?.lg};
    border: ${({ border }) =>
    typeof border !== 'string' && border?.lg && border?.lg};
    height: ${({ height }) =>
    typeof height !== 'string' && height?.lg && height?.lg};
    border-radius: ${({ borderRadius }) =>
    typeof borderRadius !== 'number' &&
    borderRadius?.lg &&
    spaces(borderRadius?.lg)};
    ${({ mx }) =>
    typeof mx !== 'number' &&
    mx?.lg &&
    css`
        margin-right: ${spaces(mx?.lg)};
        margin-left: ${spaces(mx?.lg)};
      `};
    ${({ my }) =>
    typeof my !== 'number' &&
    my?.lg &&
    css`
        margin-top: ${spaces(my?.lg)};
        margin-bottom: ${spaces(my?.lg)};
      `};
    ${({ px }) =>
    typeof px !== 'number' &&
    px?.lg &&
    css`
        padding-right: ${spaces(px?.lg)};
        padding-left: ${spaces(px?.lg)};
      `};
    ${({ py }) =>
    typeof py !== 'number' &&
    py?.lg &&
    css`
        padding-top: ${spaces(py?.lg)};
        padding-bottom: ${spaces(py?.lg)};
      `};
    margin-bottom: ${({ mb }) =>
    typeof mb !== 'number' && mb?.lg && spaces(mb?.lg)};
    margin-right: ${({ mr }) =>
    typeof mr !== 'number' && mr?.lg && spaces(mr?.lg)};
    margin-top: ${({ mt }) =>
    typeof mt !== 'number' && mt?.lg && spaces(mt?.lg)};
    margin-left: ${({ ml }) =>
    typeof ml !== 'number' && ml?.lg && spaces(ml?.lg)};
    padding-bottom: ${({ pb }) =>
    typeof pb !== 'number' && pb?.lg && spaces(pb?.lg)};
    padding-right: ${({ pr }) =>
    typeof pr !== 'number' && pr?.lg && spaces(pr?.lg)};
    padding-top: ${({ pt }) =>
    typeof pt !== 'number' && pt?.lg && spaces(pt?.lg)};
    padding-left: ${({ pl }) =>
    typeof pl !== 'number' && pl?.lg && spaces(pl?.lg)};
    z-index: ${({ zIndex }) =>
    typeof zIndex !== 'number' && zIndex?.lg && zIndex?.lg};
    order: ${({ order }) =>
    typeof order !== 'number' && order?.lg && order?.lg};

    grid-template-columns: ${({ gridTemplateColumns }) =>
    typeof gridTemplateColumns !== 'string' &&
    gridTemplateColumns?.lg &&
    gridTemplateColumns.lg};
    grid-template-rows: ${({ gridTemplateRows }) =>
    typeof gridTemplateRows !== 'string' &&
    gridTemplateRows?.lg &&
    gridTemplateRows.lg};
    gap: ${({ gap }) => typeof gap !== 'string' && gap?.lg && gap.lg};
  }
`;

export default DivMaster;
