import { GetStaticPaths, GetStaticProps } from 'next';
import { AnimeDescription } from '@components';

const AnimeDetails = ({ animeData }) => {
    return (
        <AnimeDescription data={animeData?.data} />
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_JIKAN_SERVICE}/top/anime?limit=1000`);
    const totalAnimesdata = await res.json()

    return {
        paths: totalAnimesdata.data.map(anime => ({ params: { id: anime.mal_id.toString() } })),
        fallback: 'blocking',
    };

};

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_JIKAN_SERVICE}/anime/${id}/full`);
    const animeData = await res.json();

    return {
        props: {
            animeData,
            revalidate: 86400,
        },
    };
};

export default AnimeDetails;
