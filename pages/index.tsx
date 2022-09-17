import type { NextPage } from 'next'
import { Content, Creative, Title } from '../styles/home-style'

const Home: NextPage = () => {
  return (
   <Content>
      <Title  >
        <span>Mohammad Asghari</span>
      </Title>
      <Creative>
        <span>i`am</span> FreeLancer
      </Creative>
   </Content>
  )
}

export default Home
