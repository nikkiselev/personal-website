import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  createStyles,
  makeStyles,
  Grid,
} from '@material-ui/core'
import MenuItem from './MenuItem'

const useStyles = makeStyles(() => createStyles({}))

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar color="default" position="absolute">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6">kiselev.dev</Typography>
        </Box>
      </Toolbar>

      <Toolbar>
        <Grid container alignItems="center">
          <MenuItem text="About" />
          <MenuItem text="Work experience" />
          <MenuItem text="Work with me" />
        </Grid>
      </Toolbar>
      {/* </Box> */}
    </AppBar>
  )
}

export default Header
