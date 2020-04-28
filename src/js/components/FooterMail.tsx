import { createStyles, makeStyles, Link, Theme } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

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

const FooterMail = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MailOutlineIcon className={classes.icon} />

      <Link href="mailto:nik@kiselev.dev">nik@kiselev.dev</Link>
    </div>
  )
}

export default FooterMail
