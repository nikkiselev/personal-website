import {
  makeStyles,
  createStyles,
  Avatar as MUIAvatar,
} from '@material-ui/core'

const size = 230

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: size,
      height: size,
    },
  })
)

const Avatar = () => {
  const classes = useStyles()

  return <MUIAvatar src="/images/avatar.jpeg" className={classes.root} />
}

export default Avatar
