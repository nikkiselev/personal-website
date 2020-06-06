import { Container, Grid, Typography, Box } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import Skills from './Skills'
import PageSection from './PageSection'

const year = 2014
const years = new Date().getFullYear() - year

const SkilsSection = () => (
  <PageSection>
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <Box textAlign={{ xs: 'center' }}>
            <PageSubTitle text="Skill Set" id="skills" color="textSecondary" />

            <Box clone mb={{ xs: 5 }}>
              <Typography color="textSecondary">
                These are the skills I've picked up over my {years} years as a
                professional developer.
              </Typography>
            </Box>

            <Skills />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </PageSection>
)

export default SkilsSection
