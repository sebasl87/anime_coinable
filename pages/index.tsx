import { ContainerAnimes } from '@components';
import { useAnimes } from '@hooks';
import { AnimesStateProps } from '@interfaces';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const App = () => {
  const { getFetchData } = useAnimes();

  const { animeList } = useSelector((state: AnimesStateProps) => state?.animes);
  // console.log(animeList.length)
  useEffect(() => {
    if (animeList === null || animeList?.length === 0) getFetchData();
  }, []);

  return (
    <ContainerAnimes data={animeList} />
  );
};
export default App;
