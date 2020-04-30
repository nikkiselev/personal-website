import { Grid, Typography, Link, Box, Container } from '@material-ui/core'
import FooterMail from './FooterMail'
import PageSubTitle from './PageSubTitle'
import PageSection from './PageSection'

const itemSpacing = 1

const text = `I'm a practical person so if you have a cool project to work
              on or share the feeling that I could be a good fit with your
              team, reach out and let's have a chat!`

const PageFooter = () => {
  return (
    <PageSection gray>
      <Box>
        <Container maxWidth="md">
          <Grid container>
            <Box textAlign={{ xs: 'center' }}>
              <Grid item xs={12}>
                <PageSubTitle text="Work with me" />

                <Typography variant="body1">{text}</Typography>
              </Grid>

              <Grid item xs={12}>
                <Box my={itemSpacing}>
                  <FooterMail />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box my={itemSpacing}>
                  <Typography variant="body1">I'm also on:</Typography>
                </Box>
                <Box my={itemSpacing}>
                  <Link href="https://github.com/nikkiselev">GitHub</Link>
                </Box>
                <Box my={itemSpacing}>
                  <Link href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile">
                    Stack Overflow
                  </Link>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </PageSection>
    // <FooterBar />
  )
}

export default PageFooter
