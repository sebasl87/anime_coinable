import { DivMaster, Text } from "@atoms";
import { IScore } from "@interfaces";
import { theme } from '@theme';

export const Score: React.FC<IScore> = ({ number, score }) => {
    return (
        <DivMaster
            display="flex"
            width="fit-content"
            flexDirection="column"
            alignItems="center">
            <Text fontType="H1-w600" display="flex" width="100%">
                {number}
            </Text>
            <Text
                fontType="H1-w600"
                fontColor={theme.colors.gray500}
                display="flex"
                width="100%">
                {score}
            </Text>
        </DivMaster>
    );
};
export default Score;