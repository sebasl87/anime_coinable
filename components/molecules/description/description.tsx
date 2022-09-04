import { DivMaster, Text } from "@atoms";
import { IDescription } from "@interfaces";

export const Description: React.FC<IDescription> = ({ synopsis }) => {
    return (
        <DivMaster
            display="flex"
            width="100%"
            justifyContent="flex-start"
            flexDirection="column"
            mt={4}>
            <Text fontType="H2-w600" justifyContent="flex-start">
                Description
            </Text>
            <Text fontType="H1-w500" mt={3} justifyContent="flex-start">
                {synopsis}
            </Text>
        </DivMaster>
    );
};

export default Description;