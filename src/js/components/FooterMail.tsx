import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    email: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mailIcon: {
      width: '35px',
      marginRight: '7px',
    },
  })
)

const FooterMail = () => {
  const classes = useStyles()

  return (
    <div className={classes.email}>
      <img src="/images/mail_icon.png" className={classes.mailIcon} />
      <a href="mailto:nik@kiselev.dev">nik@kiselev.dev</a>
    </div>
  )
}

export default FooterMail
