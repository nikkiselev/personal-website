import { Container, Grid, Typography, Box } from '@material-ui/core'
import PageDivider from '../js/components/PageDivider'
import SubHeader from '../js/components/SubHeader'

import Location from '../js/components/Location'
import SkillsSection from '../js/components/SkillsSection'
import WorkExperience from '../js/components/WorkExperience'
import PageSection from '../js/components/PageSection'

const Home = () => {
  return (
    <>
      <SubHeader />

      {/* <PageDivider /> */}

      <PageSection gray>
        <Container maxWidth="md">
          <Grid container justify="center">
            <Box textAlign={{ xs: 'center' }} clone>
              <Grid item xs={12} md={9}>
                <Typography variant="body1">
                  I still remember writing small scripts and apps using Pascal
                  when I was 12 years old just for fun. Fast forward to today, I
                  cannot see myself doing anything else but web development.
                </Typography>

                <br />

                <Box mb={3}>
                  <Typography variant="body1">
                    As a full stack developer, I can build seamless & scalable
                    web applications, websites. Whether it’s from scratch or an
                    existing codebase, I’m ready to jump in.
                  </Typography>
                </Box>

                <Location />
              </Grid>
            </Box>
          </Grid>
        </Container>
      </PageSection>

      {/* <PageDivider /> */}

      <SkillsSection />

      {/* <PageDivider /> */}

      <WorkExperience />
      {/* <PageDivider /> */}
    </>
  )
}

export default Home
