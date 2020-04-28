import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '30px',
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
