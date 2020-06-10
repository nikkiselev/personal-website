import { Container, Grid, Typography, Box, Fade } from '@material-ui/core'
import PageSubTitle from './PageSubTitle'
import Skills from './Skills'
import PageSection from './PageSection'
import config from 'js/config'
import { useState, useEffect } from 'react'

const year = 2014
const years = new Date().getFullYear() - year

const SkilsSection = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), config.timeoutShowAllContent)
  })

  return (
    <PageSection>
      <Fade in={showContent} timeout={config.timeoutContentFade}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box textAlign={{ xs: 'center' }}>
                <PageSubTitle
                  text="Skill Set"
                  id="skills"
                  color="textSecondary"
                />

                <Box clone mb={{ xs: 5 }}>
                  <Typography color="textSecondary">
                    These are the skills I've picked up over my {years} years as
                    a professional developer.
                  </Typography>
                </Box>

                <Skills />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </PageSection>
  )
}

export default SkilsSection
