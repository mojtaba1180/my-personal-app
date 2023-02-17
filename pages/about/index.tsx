import ReactTyped from "react-typed"
import Section from "../../components/section"
import { AboutContainer, AboutContainerContent, AboutSkillsContainer } from "./about.style"
import ProgressCard from "./component/progress-card"

function About() {
  const content = `
            <b>Hi I'm Sajad Zibafar</b> I was born in Tehran, Iran in 1989.
            <br/> I studied Software Engineering at the University of Kharazmi in Tehran, Iran.
            <br/>I got my B.Sc degree in 2012 and at the same year I was accepted to follow my masters’ study at Guilan University.
            <br/>I have been a software engineer and backend-end developer since 2011. <br/>
            With more than 8 years of experience with PHP and modern frameworks like Laravel, Codeigniter, and Symfony.
            <br/> my expertise is in developing e-Learning websites at virtual universities and also hospital information systems.
            My main research area are about software architectures and design patterns.
            I am also interested in Computer and network security. It is my expertise to develop HIS (Hospital Information Systems) as well as e-Learning websites for virtual universities. I am a lecturer at Chamran University and teach Computer at Valiasr school. I've always been drawn to the overlap between design and development. My skills are broad: from ux to design, front end to back end development. I enjoy each aspect, and love building sites from start to finish, for clients all over the world. I have experienc in development of advanced web technologies, secure implementation of software systems and testing major network/software infrastructures.  

  `

  return (
    <AboutContainer>
        <Section
      title={"WHO AM I?"}
      >
        <AboutContainerContent>
          <ReactTyped
            strings={[
              content
            ]}
            typeSpeed={30}
            backSpeed={100}
          />
        </AboutContainerContent>
      </Section>
      <Section
       title={"MY SKILLS"}
       >
      <AboutContainerContent>
        <AboutSkillsContainer>
            <ProgressCard progressNumber={30} title="Nodejs" />
            <ProgressCard progressNumber={80} title="Content-provider" />
            <ProgressCard progressNumber={60} title="Sql" />
            <ProgressCard progressNumber={80} title="Source Control [GIT] and CI/CD" />
            <ProgressCard progressNumber={70} title="Caching [Redis/Memcached]" />
            <ProgressCard progressNumber={70} title="Laravel" />
            <ProgressCard progressNumber={80} title="RESTful api" />
            <ProgressCard progressNumber={70} title="Auth0" />
            <ProgressCard progressNumber={85} title="Microservices Rabbitmq" />
            <ProgressCard progressNumber={50} title="Docker" />

        </AboutSkillsContainer>
      </AboutContainerContent>
      </Section>
    </AboutContainer>
  )
}

export default About