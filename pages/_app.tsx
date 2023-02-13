import type { AppProps } from 'next/app';
import { useState } from 'react';
// import AnimatedCursor from "react-animated-cursor";
import { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Transition from '../components/transition';
import '../styles/globals.css';
import { DarkTheme, LightTheme } from '../styles/variables';
import { App, Content, GlobalStyle, GradientBg, ImageProfile, Main, Shape } from './app-style';
import md5 from 'md5'
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(false)
  // const cursor = [
  //       'a',
  //       'input[type="text"]',
  //       'input[type="email"]',
  //       'input[type="number"]',
  //       'input[type="submit"]',
  //       'input[type="image"]',
  //       'label[for]',
  //       'select',
  //       'textarea',
  //       'button',
  //       '.link'
  //     ]
  
  return (
    <ThemeProvider theme={theme ? LightTheme : DarkTheme}>
      <App>
        
      <GlobalStyle />
        <Header setTheme={setTheme} theme={theme} />
        <Main>
            <GradientBg>
              <Shape className='blue' />
              <Shape className='red' />
              <Shape className='green' />
            </GradientBg>
          <ImageProfile>
            <div className="glitch">
              <div className="glitch__item" style={{background:`url(https://www.gravatar.com/avatar/${md5(process.env.NEXT_PUBLIC_GV_EMAIL)}.jpg?s=720)  no-repeat 50% 50%/cover`}} ></div>
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
