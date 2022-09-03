import { useAnimes } from '@hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const { getFetchData } = useAnimes();
  const { animeList } = useSelector((state) => state?.animes);

  useEffect(() => {
    if (!animeList) getFetchData();
  }, []);

  return (
    <p>Hola Mundo!</p>
  );
};
export default App;
