import { Box, Button, createStyles, makeStyles } from '@material-ui/core'
import menu from '../../data/menu'
import { MenuItem } from '../../types'

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      textTransform: 'initial',
      fontWeight: 'normal',
    },
  })
)

const DesktopMenu = () => {
  const classes = useStyles()

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
      {menu.map((i: MenuItem) => (
        <Button href={i.href} key={i.id} className={classes.button}>
          {i.label}
        </Button>
      ))}
    </Box>
  )
}

export default DesktopMenu
