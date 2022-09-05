import {
    ContainerCards,
    RowCards,
    TableCards,
} from '@atoms';
import { Datum } from '@interfaces';
import { BoxImage } from '@molecules';
import { useRouter } from 'next/router';

interface ContainerAnimesProps {
    data: Datum[];
}

export const ContainerAnimes: React.FC<ContainerAnimesProps> = ({ data }) => {
    const router = useRouter();

    return (
        <>
            <ContainerCards>
                <TableCards>
                    {data?.map((el: Datum, index: number) => (
                        <RowCards key={index} onClick={() => router.push({
                            pathname: `/anime/${el.mal_id}`,
                        })}>
                            <BoxImage image_url={el.images.webp.image_url} anime_title={el.titles[0].title} />
                        </RowCards>
                    ))}
                </TableCards>
            </ContainerCards>
        </>
    );
};

export default ContainerAnimes;
