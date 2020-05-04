import SubHeader from '../js/components/SubHeader'
import SkillsSection from '../js/components/SkillsSection'
import Jobs from '../js/components/Jobs'
import Bio from '../js/components/Bio'
import PageSection from '../js/components/PageSection'
import { Box, Typography, Container } from '@material-ui/core'
import PageSubTitle from '../js/components/PageSubTitle'

const Home = () => {
  return (
    <>
      <SubHeader />

      <PageSection withBg>
        <Bio />
        <Box mt={{ xs: 5, sm: 10, md: 15 }}>
          <SkillsSection />
        </Box>
      </PageSection>

      <Jobs />

      <PageSection>
        <Container maxWidth="md">
          <PageSubTitle text="Education" />
          <Typography variant="h6">
            Bachelor of Applied Science (B.A.Sc.), Computer science
          </Typography>
          <Typography color="textSecondary">
            Novosibirsk State Technical University
          </Typography>
          <Typography color="textSecondary">2009-2013</Typography>
        </Container>
      </PageSection>
    </>
  )
}

export default Home
