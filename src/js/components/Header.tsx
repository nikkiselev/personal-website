import { AppBar, Toolbar } from '@material-ui/core'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'
import Logo from './Logo'

const Header = () => {
  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Logo />
        <DesktopMenu />
      </Toolbar>
      <MobileMenu />
    </AppBar>
  )
}

export default Header
