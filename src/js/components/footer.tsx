import { Grid, Typography, Link, Box, Container } from '@material-ui/core'
import FooterBar from './FooterBar'
import FooterMail from './FooterMail'

const itemSpacing = 1

const Footer = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container>
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Grid item xs={12}>
              <Box my={itemSpacing}>
                <Typography variant="h5">
                  <Box fontWeight="bold" mb={1}>
                    Work with me
                  </Box>
                </Typography>

                <Typography variant="body1">
                  I'm a practical person so if you have a cool project to work
                  on or share the feeling that I could be a good fit with your
                  team, reach out and let's have a chat!
                </Typography>
              </Box>
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
      <FooterBar />
    </>
  )
}

export default Footer
