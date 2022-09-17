import type { AppProps } from 'next/app';
import Header from '../components/header';
import Transition from '../components/transition';
import '../styles/globals.css';
import { App, Content, ImageProfile, Main } from './../styles/app-style';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <App>
      <Header/>
      <Main>
        <ImageProfile>
          <div className="glitch">
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            <div className="glitch__item"></div>
            {/* <h1 className="glitch__title">YAKUZA</h1> */}
          </div>
        </ImageProfile>
        <Content>
          <Transition>
            <Component {...pageProps} />
          </Transition>
        </Content>
      </Main>
    </App>
  )
}

export default MyApp
