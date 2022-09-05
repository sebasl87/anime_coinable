import { DivMaster, Text } from '@atoms';
import styled from '@emotion/styled';
import { IDetailsTable } from "@interfaces";
import { theme } from '@theme';

export const RowDetail: React.FC<IDetailsTable> = ({ title, result }) => {
    const Line = styled.div`
    border-top: 1px solid #d9d9d9;
    display: flex;
    width: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
  `;
    return (
        <DivMaster display="flex" width="100%" mt={3}>
            <DivMaster
                display="flex"
                width="100%"
                justifyContent="space-between"
                alignItems="center">
                <Text
                    fontType="H1-w600-16"
                    fontColor={theme.colors.gray400}
                    display="flex"
                    width="auto">
                    {title}
                </Text>
                <Line />
                <Text
                    fontType="H1-w600-16"
                    display="flex"
                    width="auto"
                    whiteSpace="nowrap">
                    {result}
                </Text>
            </DivMaster>
        </DivMaster>
    );
};

export default RowDetail;