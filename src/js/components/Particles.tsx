import { makeStyles, createStyles } from '@material-ui/core/styles'
import Particles from 'react-particles-js'
import theme from 'js/theme'

const useStyles = makeStyles(() =>
  createStyles({
    bg: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: -10,
      backgroundColor: theme.palette.background.default,
    },
  })
)

const options = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: 'circle',
    },
    color: {
      value: theme.palette.primary.main,
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    lineLinked: {
      width: 1,
      enable: true,
      opacity: 0.17,
      color: '#fff',
      distance: 150,
    },
    move: {
      enable: false,
      speed: 1,
    },
  },
}

export default () => {
  const classes = useStyles()
  return (
    <Particles
      className={classes.bg}
      width="100%"
      height="100%"
      params={options}
    />
  )
}
