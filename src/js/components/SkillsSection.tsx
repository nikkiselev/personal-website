import { Container, Grid, Typography, Box } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import Skills from './Skills'

const year = 2014
const years = new Date().getFullYear() - year

const SkilsSection = () => (
  <Container maxWidth="md">
    <Grid container>
      <Grid item xs>
        <Box textAlign={{ xs: 'center' }}>
          <PageSubTitle text="Skill Set" />

          <Typography>
            These are the skills I've picked up over my {years} years as a
            professional developer.
          </Typography>

          <Grid container justify="center">
            <Grid item xs={12} sm={6} md={4}>
              <Skills />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </Container>
)

export default SkilsSection
