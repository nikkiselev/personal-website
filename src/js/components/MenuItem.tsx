import { Grid, Button, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
    },
    button: {
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
      <Button href="/" className={classes.button}>
        {props.text}
      </Button>
    </Grid>
  )
}

export default MenuItem
