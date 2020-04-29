import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import MobileMenu from './MobileMenu'

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

      <MobileMenu />
    </AppBar>
  )
}

export default Header
