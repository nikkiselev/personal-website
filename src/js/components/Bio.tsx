import { Container, Grid, Box, Typography } from '@material-ui/core'
import PageSection from './PageSection'
import ReactLogo from './ReactLogo'

const text1 = `I still remember writing small scripts and apps using Pascal when
              I was 12 years old just for fun. I built my first website in 2004 about history of Earth. Fast forward to today, I cannot
              see myself doing anything else but web development.`

const text2 = `As a full-stack developer, I can build seamless & scalable web
              applications, websites. Whether it’s from scratch or an existing
              codebase, I’m ready to jump in.`

export default () => (
  <PageSection withBg>
    <Container maxWidth="md">
      <Grid container>
        <Grid item md={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Box width="60%" height="auto" clone>
              <ReactLogo />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" component="p">
            {text1}
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            {text2}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </PageSection>
)
