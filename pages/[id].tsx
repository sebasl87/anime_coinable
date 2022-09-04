import { AnimeDescription } from '@components';

import animeData from '../mock.json';


const AnimeDetails = () => {

    return (
        <AnimeDescription data={animeData.data} />
    );
};
export default AnimeDetails;
