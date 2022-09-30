import type { NextPage } from 'next'
import { Content, Creative, Title } from './home-style'

const Home: NextPage = () => {
  return (
   <Content>
      <Title  >
        <span>Mojtaba Asghari</span>
      </Title>
      <Creative>
        <span>I am a</span> freelancer
      </Creative>
   </Content>
  )
}

export default Home
