import { Layout } from '@components';
import { AnimeContext, useIsMobileTs } from '@hooks';
import '../styles/globals.css'

function CustomApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  const isMobile = useIsMobileTs();
  return getLayout(
    <AnimeContext.Provider value={{ ...pageProps, isMobile: isMobile }}>
      <Layout>
        <Component />
      </Layout>
    </AnimeContext.Provider>
  )
}

export default CustomApp
