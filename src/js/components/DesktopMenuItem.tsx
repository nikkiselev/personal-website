import { Box, createStyles, makeStyles, Link } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      textTransform: 'initial',
      fontWeight: 'normal',
    },
  })
)

type Props = {
  href: string
  label: string
}

const DesktopMenuItem = (props: Props) => {
  const classes = useStyles()

  return (
    <Box ml={5} display="inline-flex">
      <Link href={props.href} className={classes.button} color="textSecondary">
        {props.label}
      </Link>
    </Box>
  )
}

export default DesktopMenuItem
