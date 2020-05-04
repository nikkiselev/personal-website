import { Container, Grid, Typography, Box } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import Skills from './Skills'

const year = 2014
const years = new Date().getFullYear() - year

const SkilsSection = () => (
  <Container maxWidth="lg">
    <Grid container>
      <Grid item xs={12}>
        <Box textAlign={{ xs: 'center' }}>
          <PageSubTitle text="Skill Set" id="skills" />

          <Typography>
            <Box mb={{ xs: 5 }}>
              These are the skills I've picked up over my {years} years as a
              professional developer.
            </Box>
          </Typography>

          <Skills />
        </Box>
      </Grid>
    </Grid>
  </Container>
)

export default SkilsSection
