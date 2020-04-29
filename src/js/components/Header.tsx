import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  createStyles,
  makeStyles,
  Grid,
  Tabs,
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
        <Box display={{ xs: 'none', md: 'block' }}>
          <Button href="/">About</Button>
          <Button>Work with me</Button>
        </Box>
      </Toolbar>

      <Box display={{ xs: 'block', md: 'none' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <Tabs value={0} variant="fullWidth">
              <MenuItem text="About" />
              <MenuItem text="Work experience" />
              <MenuItem text="Work with me" />
            </Tabs>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Header
