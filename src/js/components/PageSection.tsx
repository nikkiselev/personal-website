import { Box, makeStyles, createStyles } from '@material-ui/core'
import theme from '../../theme'

type Props = {
  noPb?: boolean
  withBg?: boolean
}

const padding = theme.spacing(20)
const color = theme.palette.primary.main

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: padding,
      backgroundColor: (props: Props) => (props.withBg ? color : ''),
      paddingBottom: (props: Props) => (props.noPb ? 0 : padding),
    },
  })
)

const PageSection = (props: any) => {
  const classes = useStyles(props)

  return <Box className={classes.root}>{props.children}</Box>
}

export default PageSection
