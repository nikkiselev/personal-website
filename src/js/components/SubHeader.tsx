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
      textTransform: 'uppercase',
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
  const [showAvatar, setShowAvatar] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true)
    }, 500)
    setTimeout(() => {
      setShowActions(true)
    }, 1000)
    setTimeout(() => {
      setShowAvatar(true)
    }, 1500)
  }, [])

  return (
    <PageSection ptXs={1}>
      <Container className={classes.root} maxWidth="md">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={6} justify="center">
            <Fade in={true} timeout={400}>
              <Typography variant="h3" color="textSecondary">
                {/* <Box display="flex" justifyContent="center">
                  <Avatar/>
                </Box> */}
                <Box fontWeight="bold" mb={4}>
                  Hi, I'm Nikolai
                </Box>
              </Typography>
            </Fade>

            <Fade in={showTitle} timeout={400}>
              <div>
                <SubTitle text="A Full-Stack" />
                <SubTitle text="Web Developer" />
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
        </Grid>
      </Container>
    </PageSection>
  )
}

export default SubHeader
