import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContainerAnimes } from '@components';
import { useAnimes } from '@hooks';
import { AnimesStateProps } from '@interfaces';


const App = () => {
  const { getFetchData } = useAnimes();

  const { animeList } = useSelector((state: AnimesStateProps) => state?.animes);

  useEffect(() => {
    if (animeList === null || animeList?.length === 0) getFetchData();
  }, []);

  return (
    <ContainerAnimes data={animeList} />
  );
};
export default App;
