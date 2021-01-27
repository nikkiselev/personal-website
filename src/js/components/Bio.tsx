import { Container, Grid, Box, Typography, Fade } from '@material-ui/core'
import PageSection from './PageSection'
import { useState, useEffect } from 'react'
import config from 'js/config'
import content from 'content/home.json'

const Bio = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), config.timeoutShowAllContent)
  })

  return (
    <PageSection withBg>
      <Fade in={showContent} timeout={config.timeoutContentFade}>
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3" paragraph={true}>
                {content.bioTitle}
              </Typography>
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

export default Bio
