import { DivMaster, Text, InputSearch, CalendarDate } from '../../index';

import { HeaderContentProps } from '@interfaces';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AnimeContext } from '@hooks';
import datos from '../../../mock.json'
import CheckStatus from '@icons/checkStatus/checkStatus';

const Container = styled.div<HeaderContentProps>`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 24px 16px 24px 16px;
  width: 100%;
  /* max-width: 90rem; */
  margin: auto;
`;

export const AnimeDescription: React.FC<HeaderContentProps> = ({ handleClick, pathMenu }) => {
    const router = useRouter();
    const { isMobile } = useContext(AnimeContext);

    return (
        <>
            <Container>
                <Text fontType='H2-w700' mr={2}>
                    {datos.data.title}
                </Text>
                <CheckStatus />
            </Container>
        </>
    )
};

export default AnimeDescription;
