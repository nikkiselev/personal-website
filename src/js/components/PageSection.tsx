import { Box, makeStyles, createStyles } from '@material-ui/core'
import theme from '../../theme'

type Props = {
  noPb?: boolean
  withBg?: boolean
}

const padding = theme.spacing(18)
//@ts-ignore
const color = theme.palette.primary[50]
const background = `linear-gradient( to bottom right, transparent 50%, ${color} 50% )`

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingTop: padding,
      position: 'relative',
      backgroundColor: (props: Props) => (props.withBg ? color : ''),
      paddingBottom: (props: Props) => (props.noPb ? 0 : padding),
      '&::before': {
        height: '35%',
        top: '-35%',
        content: '""',
        width: '100%',
        position: 'absolute',
        left: 0,
        zIndex: -1,
        background: (props: Props) => (props.withBg ? background : ''),
      },
    },
  })
)

const PageSection = (props: any) => {
  const classes = useStyles(props)

  return <Box className={classes.root}>{props.children}</Box>
}

export default PageSection
