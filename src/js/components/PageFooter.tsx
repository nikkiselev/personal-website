import { Grid, Typography, Link, Box, Container } from '@material-ui/core'
import FooterMail from './FooterMail'
import PageSubTitle from './PageSubTitle'
import PageSection from './PageSection'

const itemSpacing = 1

const text = `I'm a practical person so if you have a cool project to work
              on or share the feeling that I could be a good fit with your
              team, reach out and let's have a chat!`

type Props = {
  text: string
  href: string
}

const FooterLink = (props: Props) => {
  return (
    <Box my={itemSpacing}>
      <Link
        variant="body1"
        href={props.href}
        color="textSecondary"
        underline="always"
      >
        {props.text}
      </Link>
    </Box>
  )
}

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
                  {text}
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
                <FooterLink
                  text="GitHub"
                  href="https://github.com/nikkiselev"
                />
                <FooterLink
                  text="Stack Overflow"
                  href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile"
                />
                <FooterLink
                  text="LinkedIn"
                  href="https://www.linkedin.com/in/nikkiselev"
                />
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </PageSection>
  )
}

export default PageFooter
