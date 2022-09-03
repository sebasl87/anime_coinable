import { useIsMobileTs } from 'hooks';

import '../styles/globals.css'
import { AnimeContext } from '../hooks';

function CustomApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  const isMobile = useIsMobileTs();
  return getLayout(
    <AnimeContext.Provider value={{ ...pageProps, isMobile: isMobile }}>
      <Component />
    </AnimeContext.Provider>

  )
}

export default CustomApp
