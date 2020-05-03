import { Box, Toolbar, Tabs } from '@material-ui/core'
import Item from './MobileMenuItem'
import menu from '../../data/menu'
import { MenuItem } from '../../types'

const MobileMenu = () => (
  <Box display={{ xs: 'block', md: 'none' }}>
    <Toolbar disableGutters>
      <Box flexGrow={1}>
        <Tabs value={0} variant="fullWidth">
          {menu.map((i: MenuItem) => (
            <Item label={i.label} href={i.href} key={i.id} />
          ))}
        </Tabs>
      </Box>
    </Toolbar>
  </Box>
)

export default MobileMenu
