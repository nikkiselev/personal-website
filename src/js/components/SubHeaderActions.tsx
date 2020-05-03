import { Grid, Box, Button } from '@material-ui/core'

export default () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Box clone width="100%">
        <Button variant="contained" color="primary" href="#work-with-me">
          Work with me
        </Button>
      </Box>
    </Grid>

    <Grid item xs={12} sm={6}>
      <Box clone width="100%">
        <Button variant="contained" color="secondary" href="#skills">
          View Skills
        </Button>
      </Box>
    </Grid>
  </Grid>
)
