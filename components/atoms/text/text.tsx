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

  &:hover {
    color: ${({ colorHover }) => colorHover};
  }
`;

export const Text: React.FC<IText> = ({
  children,
  display = 'flex',
  fontColor = `${theme.colors.primary}`,
  fontType,
  justifyContent = 'center',
  textTransform,
  alignItems,
  margin,
  whiteSpace,
  width,
  minWidth,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
  padding,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  textAlign,
  textDecoration,
  boxShadowHover,
  handleClick,
  cursor,
  colorHover,
  border,
  borderRadius,
  opacity,
  tagType = 'div',
  flex,
  alignSelf,
}) => {
  return typeof children === 'undefined' ? null : (
    <Layout
      as={tagType}
      data-testid="activity-date"
      fontType={fontType}
      opacity={opacity}
      borderRadius={borderRadius}
      border={border}
      display={display}
      fontColor={fontColor}
      justifyContent={justifyContent}
      alignItems={alignItems}
      textTransform={textTransform}
      margin={margin}
      alignSelf={alignSelf}
      mb={mb}
      ml={ml}
      mr={mr}
      mt={mt}
      mx={mx}
      my={my}
      padding={padding}
      pb={pb}
      pl={pl}
      pr={pr}
      pt={pt}
      px={px}
      py={py}
      width={width}
      whiteSpace={whiteSpace}
      textAlign={textAlign}
      textDecoration={textDecoration}
      boxShadowHover={boxShadowHover}
      onClick={handleClick}
      cursor={cursor}
      colorHover={colorHover}
      flex={flex}
      minWidth={minWidth}>
      {children}
    </Layout>
  );
};

export default Text;
