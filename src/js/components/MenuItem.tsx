import {
  Grid,
  Button,
  makeStyles,
  createStyles,
  Box,
  Typography,
  Tab,
} from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    tab: {
      textTransform: 'initial',
    },
  })
)

type MenuItemProps = {
  text: string
}

const MenuItem = (props: MenuItemProps) => {
  const classes = useStyles()

  return (
    <Grid item xs={4} className={classes.root}>
      <Tab label={props.text} className={classes.tab} />
    </Grid>
  )
}

export default MenuItem
