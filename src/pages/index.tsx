import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import PageDivider from '../js/components/PageDivider'
import SubHeader from '../js/components/SubHeader'
import Avatar from '../js/components/Avatar'

import Location from '../js/components/Location'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    intro: {
      textAlign: 'center',
      marginTop: theme.spacing(5),
    },
    lastText: {
      marginBottom: theme.spacing(3),
    },
  })
)

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <SubHeader />

      <PageDivider />

      <Container>
        <Grid container justify="center" alignItems="center">
          <Avatar />

          <Grid item xs={12} className={classes.intro}>
            <Typography variant="body1">
              I still remember writing small scripts and apps using Pascal when
              I was 12 years old just for fun. Fast forward to today, I cannot
              see myself doing anything else but web development.
            </Typography>

            <br />

            <Typography variant="body1" className={classes.lastText}>
              As a full stack developer, I can build seamless & scalable web
              applications, websites. Whether it’s from scratch or an existing
              codebase, I’m ready to jump in.
            </Typography>

            <Location />
          </Grid>
        </Grid>
      </Container>

      <PageDivider />
    </>
  )
}

export default Home
