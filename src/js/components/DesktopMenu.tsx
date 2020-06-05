import { Box } from '@material-ui/core'
import content from 'content/home.json'
import { MenuItem } from 'js/types'
import DesktopMenuItem from './DesktopMenuItem'

const DesktopMenu = () => (
  <Box display={{ xs: 'none', md: 'block' }}>
    {content.menu.map((i: MenuItem) => (
      <DesktopMenuItem {...i} key={i.href} />
    ))}
  </Box>
)

export default DesktopMenu
