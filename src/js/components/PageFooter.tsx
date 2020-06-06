import { Grid, Typography, Box, Container } from '@material-ui/core'
import FooterMail from './FooterMail'
import PageSubTitle from './PageSubTitle'
import PageSection from './PageSection'
import content from 'content/home.json'
import SocialMedia from './SocialMedia'

const itemSpacing = 1

const PageFooter = () => {
  return (
    <PageSection>
      <Box>
        <Container maxWidth="md">
          <Grid container>
            <Box textAlign={{ xs: 'center' }}>
              <Grid item xs={12}>
                <PageSubTitle
                  text="Work with me"
                  id="work-with-me"
                  color="textSecondary"
                />

                <Typography variant="body1" color="textSecondary">
                  {content.footerText}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Box my={itemSpacing}>
                  <FooterMail />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box my={itemSpacing}>
                  <Typography variant="body1" color="textSecondary">
                    I'm also on:
                  </Typography>
                </Box>
                <SocialMedia />
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </PageSection>
  )
}

export default PageFooter
