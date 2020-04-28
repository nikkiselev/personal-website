import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
)

const Location = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <RoomOutlinedIcon className={classes.icon} />
      <Typography color="primary">Kuala Lumpur, Malaysia (GMT+8)</Typography>
    </div>
  )
}

export default Location
