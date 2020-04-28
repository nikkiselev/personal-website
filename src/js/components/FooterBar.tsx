import { Grid, Typography, createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '65px',
      backgroundColor: '#1f2020',
      color: 'white',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
)

const FooterBar = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <Typography>
          &copy; Nikolai Kiselev {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FooterBar
