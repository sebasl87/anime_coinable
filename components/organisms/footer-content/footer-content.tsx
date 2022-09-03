import { DivMaster, Text, InputSearch } from '../../index';
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
                <DivMaster maxWidth='40%'>
                    <Text fontType="H2-w600" justifyContent="left" mb={1}>
                        Sebastian Roger Loguzzo
                    </Text>
                    <Text fontType="H3-w500" fontColor={theme.colors.gray300}>
                        I apply to Coinable in AngelList and I really enjoy this challenge because It's good to show what I can do and more...
                    </Text>
                </DivMaster>
                <div>
                    <ChevronUp />
                </div>
            </Container>
        </>
    )
};

export default FooterContent;
