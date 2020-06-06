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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('xs')]: {
        marginTop: theme.spacing(5),
      },
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(12),
      },
      marginBottom: theme.spacing(25),
      display: 'flex',
      alignItems: 'center',
      // textTransform: 'uppercase',
      textAlign: 'center',
    },
  })
)

type SubTitle = {
  text: string
}

const SubTitle = (props: SubTitle) => (
  <Typography variant="subtitle1" color="textSecondary">
    <Box fontWeight="bold" letterSpacing={5}>
      {props.text}
    </Box>
  </Typography>
)

const SubHeader = () => {
  const classes = useStyles()

  const [showTitle, setShowTitle] = useState(false)
  const [showActions, setShowActions] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true)
    }, 500)
    setTimeout(() => {
      setShowActions(true)
    }, 1000)
  }, [])

  return (
    <PageSection ptXs={1}>
      <Container className={classes.root} maxWidth="md">
        <Grid container justify="flex-start" alignItems="flex-start">
          <Box clone textAlign="left">
            <Grid item xs={12} md={7} justify="flex-start">
              <Fade in={true} timeout={400}>
                <Typography variant="h3" color="textSecondary">
                  <Box fontWeight="bold" mb={4}>
                    Nikolai Kiselev
                  </Box>
                </Typography>
              </Fade>

              <Fade in={showTitle} timeout={400}>
                <div>
                  <Typography color="textSecondary">
                    <Box>
                      A full-stack web developer based in Kuala Lumpur,
                      Malaysia. I build modern and secure web applications.
                    </Box>
                  </Typography>
                </div>
              </Fade>

              <Fade in={showActions} timeout={400}>
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
            <Box display="flex" justifyContent="flex-end">
              <Avatar />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  )
}

export default SubHeader
