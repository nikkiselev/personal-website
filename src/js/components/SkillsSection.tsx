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
            These are the skills I've picked up over my {years} years as a
            professional developer.
          </Typography>

          <Skills />
        </Box>
      </Grid>
    </Grid>
  </Container>
)

export default SkilsSection
