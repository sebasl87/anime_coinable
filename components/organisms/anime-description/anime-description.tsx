import { DivMaster, Text } from '../../index';

import { HeaderContentProps } from '@interfaces';
import styled from '@emotion/styled';
import datos from '../../../mock.json';
import { Score, RowDetail } from '@molecules';

const Container = styled.div<HeaderContentProps>`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 24px 16px 24px 16px;
  width: 100%;
  /* max-width: 90rem; */
  margin: auto;
  flex-direction: column;
`;

const Image = styled.img`
  margin-left: 2rem;
  width: 2.3rem;
`;

const TableDetails = () => (
    <DivMaster width="100%">
        <RowDetail title="Type" result={datos.data.type} />
        <RowDetail title="Source" result={datos.data.source} />
        <RowDetail title="Episodes" result={datos.data.episodes} />
        <RowDetail title="Status" result={datos.data.status} />
    </DivMaster>
)

const Scores = () => (
    <DivMaster
        display="flex"
        width="100%"
        justifyContent="space-between"
        mt={4}>
        <Score number={datos.data.score} score="Score" />
        <Score number={datos.data.rank} score="Rank" />
        <Score number={datos.data.popularity} score="Popularity" />
    </DivMaster>
)
export const AnimeDescription: React.FC = () => {

    return (
        <>
            <Container>
                <DivMaster
                    textAlign="initial"
                    display="initial"
                    width="100%"
                    mb={{ sm: 1, ll: 3 }}>
                    <Text
                        fontType="H2-w700"
                        mr={2}
                        textAlign="left"
                        alignItems="initial"
                        width="fit-content"
                        display="contents">
                        {datos.data.title}
                    </Text>
                    <Image src="/check.svg" alt="check" />
                </DivMaster>
                <DivMaster display="flex" width="100%">
                    <DivMaster>IMAGEN</DivMaster>
                    <DivMaster display="flex" width="100%" flexDirection="column">
                        <TableDetails />
                        <Scores />
                    </DivMaster>
                </DivMaster>
            </Container>
        </>
    );
};

export default AnimeDescription;