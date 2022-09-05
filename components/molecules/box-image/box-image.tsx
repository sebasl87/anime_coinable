import { DivMaster, Text } from '@atoms';
import { BoxImageProps } from '@interfaces';
import { theme } from '@theme';
import Image from 'next/image';

export const BoxImage: React.FC<BoxImageProps> = ({
  image_url,
  anime_title
}) => {
  return (
    <DivMaster position="relative" maxWidth={{ ll: '25rem' }} cursor="pointer">
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
