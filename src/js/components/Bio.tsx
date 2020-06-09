import { Container, Grid, Box, Typography, Fade } from '@material-ui/core'
import PageSection from './PageSection'
import ReactLogo from './ReactLogo'
import { useState, useEffect } from 'react'
import config from 'js/config'
import content from 'content/home.json'

export default () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), config.timeoutShowAllContent)
  })

  return (
    <PageSection withBg>
      <Fade in={showContent} timeout={config.timeoutContentFade}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%!important"
              >
                <Box width="60%!important" height="auto!important" clone>
                  <ReactLogo />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {content.bio.map((text) => (
                <Typography variant="body1" paragraph={true}>
                  {text}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </PageSection>
  )
}
