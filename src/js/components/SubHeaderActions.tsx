import { Grid, Box, Button } from '@material-ui/core'

const SubHeaderActions = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Box clone width="100%">
        <Button variant="outlined" color="primary" href="#work-with-me">
          Work with me
        </Button>
      </Box>
    </Grid>
  </Grid>
)

export default SubHeaderActions
