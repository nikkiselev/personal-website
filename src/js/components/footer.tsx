import { Grid, createStyles, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    content: {
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

const Footer = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item xs={12} className={classes.content}>
        <Typography>
          &copy; Nikolai Kiselev {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer
