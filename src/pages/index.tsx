import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'
import { Grid } from '@material-ui/core'
import { Container } from 'next/app'
import ContentDivider from 'js/components/ContentDivider'

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container justify="center">
          <Grid item>
            <SubHeader />
            <ContentDivider variant="middle" />
            <Bio />
            <SkillsSection />
            <ContentDivider variant="middle" />
            <Jobs />
            <ContentDivider variant="middle" />
            <Education />
            <ContentDivider variant="middle" />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
