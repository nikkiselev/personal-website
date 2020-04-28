import { Divider, Theme, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
  })
)

const PageDivider = () => {
  const classes = useStyles()

  return <Divider className={classes.root} />
}
export default PageDivider
