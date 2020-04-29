import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header = () => {
  return (
    <AppBar color="default" position="absolute">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Box flexGrow={1}>
          <Typography variant="h6">kiselev.dev</Typography>
        </Box>

        <Box display={{ xs: 'none', md: 'block' }}>
          <Button href="/">About</Button>
          <Button>Work with me</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
