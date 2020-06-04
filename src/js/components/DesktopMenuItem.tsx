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
  id: number
  href: string
  label: string
}

const DesktopMenuItem = (props: Props) => {
  const classes = useStyles()

  return (
    <Box ml={5} display="inline-flex" key={props.id}>
      <Link
        href={props.href}
        key={props.id}
        className={classes.button}
        color="textSecondary"
      >
        {props.label}
      </Link>
    </Box>
  )
}

export default DesktopMenuItem
