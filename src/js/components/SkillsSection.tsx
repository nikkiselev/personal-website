import { Container, Grid, Typography } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'

const year = 2014
const years = new Date().getFullYear() - year

const SkilsSection = () => (
  <Container maxWidth="md">
    <Grid container>
      <Grid item xs>
        <PageSubTitle text="Skill Set" />

        <Typography>
          These are the skills I've picked up over my {years} years as a
          professional developer.
        </Typography>
      </Grid>
    </Grid>
  </Container>
)

export default SkilsSection
