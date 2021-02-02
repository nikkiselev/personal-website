import { Box, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
    },
  })
)

const PageSection = (props: any) => {
  const classes = useStyles()

  return <Box className={classes.root}>{props.children}</Box>
}

export default PageSection
