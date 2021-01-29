import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'
import { Divider, Grid } from '@material-ui/core'
import { Container } from 'next/app'

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container justify="center">
          <Grid item>
            <SubHeader />
            <Divider variant="middle" />
            <Bio />
            <Divider variant="middle" />
            <SkillsSection />
            <Divider variant="middle" />
            <Jobs />
            <Divider variant="middle" />
            <Education />
            <Divider variant="middle" />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
