import { IText } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import DivMaster from '../div-master/div-master';

const Layout = styled(DivMaster) <IText>`
  flex: ${({ flex }) => flex};
  color: ${({ fontColor }) => fontColor};
  ${({ fontType }) => theme.textTypes[`${fontType}`]};
  text-decoration: ${({ textDecoration }) => textDecoration};
  opacity: ${({ opacity }) => opacity};
  text-transform: ${({ textTransform }) => textTransform};
  text-align: ${({ textAlign }) => typeof textAlign === 'string' && textAlign};
  align-self: ${({ alignSelf }) => alignSelf};
  position: ${({ position }) => position};
  text-shadow: ${({ textShadow }) => textShadow};
  ${theme.breakpoints.sm} {
    ${({ fontType }) =>
    typeof fontType !== 'string' &&
    fontType?.sm &&
    theme.textTypes[`${fontType?.sm}`]};
  }

  ${theme.breakpoints.md} {
    ${({ fontType }) =>
    typeof fontType !== 'string' &&
    fontType?.md &&
    theme.textTypes[`${fontType?.md}`]};
  }

  ${theme.breakpoints.ll} {
    ${({ fontType }) =>
    typeof fontType !== 'string' &&
    fontType?.ll &&
    theme.textTypes[`${fontType?.ll}`]};
  }
`;

export const Text: React.FC<IText> = ({
  alignItems,
  alignSelf,
  border,
  borderRadius,
  textShadow,
  children,
  colorHover,
  cursor,
  display = 'flex',
  flex,
  fontColor = `${theme.colors.primary}`,
  fontType,
  handleClick,
  justifyContent = 'center',
  margin,
  bottom,
  minWidth,
  left,
  ml,
  mb,
  mr,
  mt,
  mx,
  my,
  opacity,
  padding,
  pb,
  pl,
  position,
  pr,
  pt,
  px,
  py,
  tagType = 'div',
  textAlign,
  textDecoration,
  textTransform,
  whiteSpace,
  width,
}) => {
  return typeof children === 'undefined' ? null : (
    <Layout
      alignItems={alignItems}
      alignSelf={alignSelf}
      as={tagType}
      border={border}
      borderRadius={borderRadius}
      textShadow={textShadow}
      colorHover={colorHover}
      cursor={cursor}
      data-testid="activity-date"
      display={display}
      flex={flex}
      fontColor={fontColor}
      fontType={fontType}
      justifyContent={justifyContent}
      margin={margin}
      bottom={bottom}
      minWidth={minWidth}
      left={left}
      ml={ml}
      mb={mb}
      mr={mr}
      mt={mt}
      mx={mx}
      my={my}
      onClick={handleClick}
      opacity={opacity}
      padding={padding}
      pb={pb}
      pl={pl}
      position={position}
      pr={pr}
      pt={pt}
      px={px}
      py={py}
      textAlign={textAlign}
      textDecoration={textDecoration}
      textTransform={textTransform}
      whiteSpace={whiteSpace}
      width={width}
    >
      {children}
    </Layout>
  );
};

export default Text;
