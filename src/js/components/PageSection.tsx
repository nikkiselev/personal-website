import { Box, makeStyles, createStyles } from '@material-ui/core'
import theme from 'js/theme'

type Props = {
  noPb?: boolean
  withBg?: boolean
  ptXs: number
}

const padding = {
  xs: theme.spacing(3),
  sm: theme.spacing(5),
  md: theme.spacing(5),
}

//@ts-ignore
const color = '#fff'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      [theme.breakpoints.up('xs')]: {
        paddingTop: padding['xs'],
        paddingBottom: (props: Props) => (props.noPb ? 0 : padding['xs']),
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: padding['sm'],
        paddingBottom: (props: Props) => (props.noPb ? 0 : padding['sm']),
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: padding['md'],
        paddingBottom: (props: Props) => (props.noPb ? 0 : padding['md']),
      },
      position: 'relative',
      backgroundColor: (props: Props) => (props.withBg ? color : ''),
    },
  })
)

const PageSection = (props: any) => {
  const classes = useStyles(props)

  return <Box className={classes.root}>{props.children}</Box>
}

export default PageSection
