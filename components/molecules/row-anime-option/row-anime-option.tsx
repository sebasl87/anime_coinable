import { DivMaster, Text } from "@atoms";
import ChevronRight from "@icons/chevronRight/chevronRight";
import { IScore } from "@interfaces";
import { theme } from '@theme';
import Image from "next/image";

export const RowAnimeOption: React.FC<IScore> = ({ number, score }) => {
    return (
        <DivMaster
            display="flex"
            width="100%"
            flexDirection="row"
            alignItems="center">
            <Image
                src="https://cdn.myanimelist.net/images/anime/11/48721t.webp"
                width={50}
                height={50}
                style={{ borderRadius: '5px' }}
            />
            <DivMaster
                width="100%"
                flexDirection="column"
                ml={2}
            >
                <Text fontType="H3-w500-16" display="flex" width="100%" justifyContent="flex-start">
                    Shingeki no Kyojin: Attack on Skytree
                </Text>
                <Text
                    fontType="H1-w500"
                    fontColor={theme.colors.gray600}
                    display="flex"
                    width="100%"
                    justifyContent="flex-start">
                    Movie · 1 Episode · Complete
                </Text>
            </DivMaster>
            <ChevronRight />
        </DivMaster>
    );
};
export default RowAnimeOption;