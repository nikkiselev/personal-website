import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Box,
  Fade,
} from '@material-ui/core'
import Avatar from './Avatar'
import SubHeaderActions from './SubHeaderActions'
import PageSection from './PageSection'
import { useEffect, useState } from 'react'
import SocialMedia from './SocialMedia'
import config from 'js/config'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('xs')]: {},
      [theme.breakpoints.up('md')]: {},
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
  })
)

const SubHeader = () => {
  const classes = useStyles()

  const [showTitle, setShowTitle] = useState(false)
  const [showActions, setShowActions] = useState(false)
  const [showAvatar, setShowAvatar] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 400)
    setTimeout(() => setShowActions(true), 800)
    setTimeout(() => setShowAvatar(true), config.timeoutShowAllContent)
  }, [])

  return (
    <PageSection>
      <Container className={classes.root} maxWidth="md">
        <Grid container justify="flex-start" alignItems="flex-start">
          <Box clone textAlign="left">
            <Grid item xs={12} md={7} justify="flex-start">
              <Fade in={true} timeout={config.timeoutContentFade}>
                <Typography variant="h3" color="textSecondary">
                  <Box fontWeight="bold" mb={4}>
                    Nikolai Kiselev
                  </Box>
                </Typography>
              </Fade>

              <Fade in={showTitle} timeout={config.timeoutContentFade}>
                <div>
                  <Typography color="textSecondary">
                    <Box>
                      A full-stack web developer based in Kuala Lumpur,
                      Malaysia. I build modern and secure web applications.
                    </Box>
                  </Typography>
                </div>
              </Fade>

              <Fade in={showActions} timeout={config.timeoutContentFade}>
                <Box mt={4}>
                  <SubHeaderActions />
                  <Box mt={6}>
                    <SocialMedia />
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Box>

          <Grid xs={12} md={5}>
            <Fade in={showAvatar} timeout={config.timeoutContentFade}>
              <Box display="flex" justifyContent="flex-end">
                <Avatar />
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  )
}

export default SubHeader
