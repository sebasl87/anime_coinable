import { DivMaster, Text } from '../../index';
import { AnimeIDData, Data, HeaderContentProps } from '@interfaces';
import styled from '@emotion/styled';
import { Score, RowDetail, Description } from '@molecules';
import Image from 'next/image';

const Container = styled.div<HeaderContentProps>`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 24px 16px 24px 16px;
  width: 100%;
  margin: auto;
  flex-direction: column;
`;

const ImageCheck = styled.img`
  margin-left: 2rem;
  width: 2.3rem;
`;
interface ContainerAnimeDescriptionProps {
    data: Data;
}

export const AnimeDescription: React.FC<ContainerAnimeDescriptionProps> = ({ data }) => {

    const TableDetails = () => (
        <DivMaster width="100%">
            <RowDetail title="Type" result={data.type} />
            <RowDetail title="Source" result={data.source} />
            <RowDetail title="Episodes" result={data.episodes} />
            <RowDetail title="Status" result={data.status} />
        </DivMaster>
    );

    const Scores = () => (
        <DivMaster display="flex" width="100%" justifyContent="space-between" mt={4}>
            <Score number={data.score} score="Score" />
            <Score number={data.rank} score="Rank" />
            <Score number={data.popularity} score="Popularity" />
        </DivMaster>
    );


    return (
        <>
            <Container>
                <DivMaster
                    display="flex"
                    width="100%"
                    flexDirection={{ sm: 'column', md: 'row' }}>
                    <DivMaster
                        display="flex"
                        width="100%"
                        height="100%"
                        maxWidth={{ sm: '100%', md: '34rem' }}
                        justifyContent="center">
                        <Image
                            src={data.images.webp.large_image_url}
                            width={367}
                            height={330}
                            style={{ borderRadius: 10 }}
                            layout='fixed'
                        />
                    </DivMaster>
                    <DivMaster
                        display="flex"
                        width="100%"
                        flexDirection="column"
                        ml={{ sm: 0, md: 2 }}>
                        <DivMaster
                            textAlign="initial"
                            display="initial"
                            width="100%"
                            mb={{ sm: 1, md: 3 }}
                            mt={{ sm: 2, ll: 0 }}>
                            <Text
                                fontType="H2-w700"
                                mr={2}
                                textAlign="left"
                                alignItems="initial"
                                width="fit-content"
                                display="contents">
                                {data.title}
                            </Text>
                            <ImageCheck src="/check.svg" alt="check" />
                        </DivMaster>
                        <TableDetails />
                        <Scores />
                    </DivMaster>
                </DivMaster>
                <Description synopsis={data.synopsis} />
            </Container>
        </>
    );
};

export default AnimeDescription;