import { AppBar, Toolbar, Container, Box } from '@material-ui/core'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import Logo from './Logo'

const Header = () => {
  return (
    <Box clone my={6}>
      <AppBar color="secondary" position="static" elevation={0}>
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Logo />
            <DesktopMenu />
          </Toolbar>
          <MobileMenu />
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
