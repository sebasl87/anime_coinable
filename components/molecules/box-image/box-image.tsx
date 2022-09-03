import { DivMaster, Text } from '@atoms';
import { BoxImageProps } from '@interfaces';
import styled from '@emotion/styled';
import { theme } from '@theme';
import Image from 'next/image';

const BoxContainer = styled.div`
  width: 100%;
  border-radius: ${theme.spaces(0.75)};
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.contrastText};
  margin-bottom: ${theme.spaces(2)};
  box-shadow: ${theme.colors.boxShadow};
`;

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
    <DivMaster position="relative">
      <Image
        src={image_url}
        width={361}
        height={506}
        style={{ borderRadius: 10 }}
      />
      <Text fontType="H3-w600" fontColor={theme.colors.white} position="absolute" left="2rem" bottom="1rem">
        {anime_title}
      </Text>
    </DivMaster>
    // <BoxContainer data-testid="box-image">
    //   <RowImage onClick={handleClick} backgroundColor={backgroundColor} AR={AR}>
    //     {lazy ? (
    //       <Image
    //         className="lazyload"
    //         data-src={imgUrl}
    //         maxWidthImagesCarries={maxWidthImagesCarries}
    //       />
    //     ) : (
    //       <Image src={imgUrl} maxWidthImagesCarries={maxWidthImagesCarries} />
    //     )}
    //   </RowImage>
    //   <TitleHead
    //     textAlign="left"
    //     text={title}
    //     type="H3"
    //     mt={1.5}
    //     pl={2}
    //     pr={{ sm: 0, md: 2 }}
    //     mb={0}
    //     fontType={'Subtitle-1-w700'}
    //   />
    //   <Text
    //     fontType="Body-2-w400"
    //     mt={{ sm: 0.5, md: 0.5 }}
    //     mb={{ sm: 2, md: 3 }}
    //     pr={{ sm: 1, md: 2 }}
    //     pl={{ sm: 2, md: 2 }}>
    //     {description}
    //   </Text>
    // </BoxContainer>
  );
};

export default BoxImage;
