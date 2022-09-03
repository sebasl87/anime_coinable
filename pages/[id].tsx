import { AnimeDescription, ContainerAnimes } from '@components';
import { useAnimes } from '@hooks';
import { AnimesStateProps } from '@interfaces';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const AnimeDetails = () => {

    return (
        <AnimeDescription />
    );
};
export default AnimeDetails;
