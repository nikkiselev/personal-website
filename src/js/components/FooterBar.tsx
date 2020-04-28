import { Grid, Typography, Box } from '@material-ui/core'

const FooterBar = () => {
  return (
    <Box mt={8}>
      <Grid container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={100}
          color="white"
          bgcolor="#1f2020"
          clone
        >
          <Grid item xs={12}>
            <Typography component="div">
              &copy; Nikolai Kiselev {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default FooterBar
