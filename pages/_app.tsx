import type { AppProps } from 'next/app';
import { useState } from 'react';
import AnimatedCursor from "react-animated-cursor";
import { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Transition from '../components/transition';
import '../styles/globals.css';
import { DarkTheme, LightTheme } from '../styles/variables';
import { App, Content, GlobalStyle, ImageProfile, Main } from './../styles/app-style';
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(true)
  const cursor = [
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]
  
  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <App>
        <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='0, 0, 0'
        outerAlpha={0}
        innerScale={0.7}
        outerScale={1.3}
        clickables={cursor}
        outerStyle={{
    border: '1px solid #111'
  }}
        />
      <GlobalStyle />
        <Header setTheme={setTheme} theme={theme} />
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
    </ThemeProvider>
  )
}

export default MyApp
