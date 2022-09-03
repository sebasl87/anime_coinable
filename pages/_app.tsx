import { Layout } from '@components';
import { AnimeContext, useIsMobileTs } from '@hooks';
import '../styles/globals.css'
import makeStore from "redux/store";
import { Provider } from 'react-redux';

function CustomApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
  const store = makeStore()

  const isMobile = useIsMobileTs();
  return getLayout(
    <AnimeContext.Provider value={{ ...pageProps, isMobile: isMobile }}>
      <Provider store={store}>
        <Layout>
          <Component />
        </Layout>
      </Provider>
    </AnimeContext.Provider>
  )
}

export default CustomApp
