import { Box, makeStyles, createStyles } from '@material-ui/core'
import theme from '../theme'
import Particles from './Particles'

type Props = {
  noPb?: boolean
  withBg?: boolean
  ptXs: number
}

const padding = {
  xs: theme.spacing(6),
  sm: theme.spacing(12),
  md: theme.spacing(18),
}

//@ts-ignore
const color = '#fff'
// const background = `linear-gradient( to bottom right, transparent 50%, ${color} 50% )`

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      [theme.breakpoints.up('xs')]: {
        paddingTop: (props: Props) =>
          props.ptXs ? theme.spacing(props.ptXs) : padding['xs'],
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

  return (
    <Box className={classes.root}>
      {/* {props.withBg && <Particles/> } */}
      {props.children}
    </Box>
  )
}

export default PageSection
