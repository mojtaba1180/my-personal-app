import { IconBrandInstagram,IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Content, Creative, Title } from './home-style'

const Home: NextPage = () => {
  return (
   <Content>
      <Title  >
        <span>Mojtaba Asghari</span>
      </Title>
      <Creative>
        <p>
        <span>I am a</span> freelancer
        </p>
        <div>
          <a href="https://instagram.com/mojtaba_1180" target="_blank"rel="noopener noreferrer"   >
            <IconBrandInstagram className="social" />
          </a>
          <a href="https://github.com/mojtaba1180" target="_blank" rel="noopener noreferrer"  >
          <IconBrandGithub  className="social"/>
          </a>
          <a href="https://instagram.com/mojtaba_1180" target="_blank" rel="noopener noreferrer" >
          <IconBrandLinkedin className="social" />
          </a>
        </div>
      </Creative>
   </Content>
  )
}

export default Home
