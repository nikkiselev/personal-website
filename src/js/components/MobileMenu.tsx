import { Box, Toolbar, Grid } from '@material-ui/core'
import Item from './MobileMenuItem'
import content from 'content/home.json'

const MobileMenu = () => {
  const items = content.menu
    .filter((i: any) => i.mobile)
    .map((i: any) => <Item label={i.label} href={i.href} key={i.href} />)

  return (
    <Box display={{ xs: 'block', sm: 'none' }}>
      <Toolbar disableGutters>
        <Grid container>{items}</Grid>
      </Toolbar>
    </Box>
  )
}

export default MobileMenu
