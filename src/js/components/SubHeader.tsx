import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Box,
} from '@material-ui/core'
import Avatar from './Avatar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // height: '100%',
      marginTop: theme.spacing(5),
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    title: {
      fontWeight: 'bold',
      // marginBottom: '30px',
    },
    subTitle: {
      fontWeight: 'bold',
      letterSpacing: 7,
    },
  })
)

const SubHeader = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.title}>
            Hi, I'm Nikolai
          </Typography>

          <Box display="flex" justifyContent="center" marginY={3}>
            <Avatar />
          </Box>

          <Typography variant="subtitle1" className={classes.subTitle}>
            A Full Stack
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle}>
            Web Developer
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SubHeader
