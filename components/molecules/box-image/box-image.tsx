import { DivMaster, Text } from '@atoms';
import { BoxImageProps } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import Image from 'next/image';

const RowImage = styled.div<{ backgroundColor?: string; AR?: boolean }>`
  display: flex;
  width: 100%;
  height: ${props => props.AR && `${theme.spaces(14)}`};
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.background};
  padding-top: ${theme.spaces(3)};
  padding-bottom: ${theme.spaces(3)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-top-left-radius: ${theme.spaces(0.75)};
  border-top-right-radius: ${theme.spaces(0.75)};
  cursor: ${props => (props.AR ? 'default' : 'pointer')};
  &:hover {
    opacity: ${props => (props.AR ? 1 : 0.85)};
  }
`;



export const BoxImage: React.FC<BoxImageProps> = ({
  image_url,
  anime_title
}) => {
  return (
    <DivMaster position="relative" maxWidth={{ ll: '25rem' }} cursor="pointer" onClick={() => console.log('click en imagen')}>
      <Image
        src={image_url}
        width={361}
        height={506}
        style={{ borderRadius: 10 }}
      />
      <Text fontType={{ sm: "H3-w600", md: "H3-w600-16" }} fontColor={theme.colors.white} position="absolute" left="2rem" bottom="1rem" textShadow='1px 1px 2px black'>
        {anime_title}
      </Text>
    </DivMaster>
  );
};

export default BoxImage;
