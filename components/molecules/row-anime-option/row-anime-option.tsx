import { DivMaster, Text } from '@atoms';
import styled from '@emotion/styled';
import ChevronRight from '@icons/chevronRight/chevronRight';
import { Datum } from '@interfaces';
import { theme } from '@theme';
import Image from 'next/image';

interface RowAnimeProps {
  optAnime?: Datum;
  handleClick: () => void;
}
const ContainerRow = styled(DivMaster)`
  margin-bottom: 3rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RowAnimeOption: React.FC<RowAnimeProps> = ({
  optAnime,
  handleClick,
}) => {
  return (
    <ContainerRow
      display="flex"
      width="100%"
      flexDirection="row"
      alignItems="center"
      onClick={handleClick}
      cursor="pointer"
      data-testid="container-row">
      <Image
        src={optAnime.images.webp.small_image_url}
        width={50}
        height={50}
        style={{ borderRadius: '5px' }}
      />
      <DivMaster width="100%" flexDirection="column" ml={2}>
        <Text
          fontType="H3-w500-16"
          display="flex"
          width="100%"
          justifyContent="flex-start">
          {optAnime.title}
        </Text>
        <Text
          fontType="H1-w500"
          fontColor={theme.colors.gray600}
          display="flex"
          width="100%"
          justifyContent="flex-start">
          {optAnime.type} · {optAnime.episodes} Episodes · {optAnime.status}
        </Text>
      </DivMaster>
      <ChevronRight />
    </ContainerRow>
  );
};
export default RowAnimeOption;
