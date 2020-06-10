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
            <Box clone pb={{ xs: 3, md: 0 }}>
              <Grid item xs={12} md={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems={{ xs: 'center', md: 'initial' }}
                  height="100%!important"
                >
                  <Box width="60%!important" height="auto!important" clone>
                    <ReactLogo />
                  </Box>
                </Box>
              </Grid>
            </Box>
            <Grid item xs={12} md={6}>
              <Box textAlign={{ xs: 'center', md: 'left' }}>
                {content.bio.map((text) => (
                  <Typography variant="body1" paragraph={true} key={text}>
                    {text}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </PageSection>
  )
}
