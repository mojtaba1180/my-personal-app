import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react'
import type { NextPage } from 'next'
import { Content, Creative, Title } from '../styles/home-style'

const Home: NextPage = () => {
  return (
   <Content>
      <Title  >
        <span>Sajad Zibafar</span>
      </Title>
      <Creative>
        <p>
        <span>I am a</span> backend developer
        </p>
        <div>
          <a href="https://instagram.com/zibafar" target="_blank"rel="noopener noreferrer"   >
            <IconBrandInstagram className="social" />
          </a>
          <a href="https://github.com/zibafar" target="_blank" rel="noopener noreferrer"  >
          <IconBrandGithub  className="social"/>
          </a>
          <a href="https://instagram.com/zibafar" target="_blank" rel="noopener noreferrer" >
          <IconBrandLinkedin className="social" />
          </a>
        </div>
      </Creative>
   </Content>
  )
}

export default Home
