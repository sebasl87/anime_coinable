import { Layout } from '@components';
import { AnimeContext, useIsMobileTs } from '@hooks';
import '../styles/globals.css'
import { wrapper } from "redux/store";
import { Provider } from 'react-redux';

function CustomApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  const isMobile = useIsMobileTs();
  return getLayout(
    <AnimeContext.Provider value={{ ...pageProps, isMobile: isMobile }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimeContext.Provider>
  )
}

export default wrapper.withRedux(CustomApp)
