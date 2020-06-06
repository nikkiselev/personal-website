import { Grid, Typography, Box, Container } from '@material-ui/core'
import FooterMail from './FooterMail'
import PageSubTitle from './PageSubTitle'
import PageSection from './PageSection'
import content from 'content/home.json'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import StackOverflow from './StackOverflow'

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
                <a href="https://www.linkedin.com/in/nikkiselev">
                  <LinkedIn
                    htmlColor="#fff"
                    fontSize="large"
                    titleAccess="LinkedIn"
                  />
                </a>
                &nbsp;
                <a href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile">
                  <StackOverflow
                    htmlColor="#fff"
                    fontSize="large"
                    titleAccess="Stack Overflow"
                  />
                </a>
                &nbsp;
                <a href="https://github.com/nikkiselev">
                  <GitHub
                    htmlColor="#fff"
                    fontSize="large"
                    titleAccess="GitHub"
                  />
                </a>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </PageSection>
  )
}

export default PageFooter
