import { DivMaster, Text } from '../../index';
import styled from '@emotion/styled';
import { theme } from '@theme';
import ChevronUp from '@icons/chevronUp/chevronUp';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 24px 16px 24px 16px;
  width: 100%;
  max-width: 90rem;
  margin: auto;
`;

export const FooterContent: React.FC = () => {
    return (
        <>
            <Container>
                <DivMaster maxWidth='36rem'>
                    <Text fontType="H2-w600" justifyContent="left" mb={1}>
                        Sebastian Roger Loguzzo
                    </Text>
                    <Text fontType="H3-w500" fontColor={theme.colors.gray300}>
                        I apply to Coinable in AngelList and I really enjoy this challenge because It's good to show what I can do and more...
                    </Text>
                </DivMaster>
                <DivMaster onClick={() => document.documentElement.scrollTop = 0} cursor="pointer" ml={{ sm: 2, md: 0 }}>
                    <ChevronUp />
                </DivMaster>
            </Container>
        </>
    )
};

export default FooterContent;
