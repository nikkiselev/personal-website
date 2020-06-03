import {
  Grid,
  Typography,
  Box,
  makeStyles,
  createStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    bar: {
      background: 'linear-gradient(to right, #e03f6f, #263c94)',
      height: 10,
    },
  })
)

const FooterBar = () => {
  const classes = useStyles()

  return (
    <Box>
      <Grid container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={100}
          color="white"
          bgcolor="#000"
          clone
        >
          <Grid item xs={12}>
            <Typography component="div">
              &copy; {new Date().getFullYear()} Nikolai Kiselev
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <div className={classes.bar}></div>
    </Box>
  )
}

export default FooterBar
