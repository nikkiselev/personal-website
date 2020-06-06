import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
// import Jobs from 'js/components/Jobs'
import Bio from 'js/components/Bio'
import PageSection from 'js/components/PageSection'
import { Box, Container } from '@material-ui/core'
import PageSubTitle from 'js/components/PageSubTitle'
import dynamic from 'next/dynamic'
import JobsItem from 'js/components/JobsItem'

const Jobs = dynamic(() => import('js/components/Jobs'), {
  ssr: false,
})

const uni = {
  role: 'Bachelor of Applied Science (B.A.Sc.), Computer science',
  company: 'Novosibirsk State Technical University',
  from: 2009,
  to: 2013,
  type: '',
  place: 'Novosibirsk, Russia',
  responsibilities: [],
  skills: [],
}

const Home = () => {
  return (
    <>
      <SubHeader />

      <Bio />

      <PageSection>
        <Box mt={{ xs: 5, sm: 10, md: 15 }}>
          <SkillsSection />
        </Box>
      </PageSection>

      <Jobs />

      <PageSection withBg>
        <Container maxWidth="md">
          <PageSubTitle text="Education" />
          <JobsItem job={uni} />
        </Container>
      </PageSection>
    </>
  )
}

export default Home
