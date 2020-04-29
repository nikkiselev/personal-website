import { AppBar, Toolbar, Container } from '@material-ui/core'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import Logo from './Logo'

const Header = () => {
  return (
    <AppBar color="default" position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Logo />
          <DesktopMenu />
        </Toolbar>
        <MobileMenu />
      </Container>
    </AppBar>
  )
}

export default Header
