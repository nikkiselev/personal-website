import { Box, Button, Link } from '@material-ui/core'
import MailOutline from '@material-ui/icons/MailOutline'

const FooterMail = () => {
  return (
    <Box
      my={3}
      display="flex"
      alignItems="center"
      justifyContent={{ xs: 'center' }}
    >
      <MailOutline color="primary" />
      &nbsp;
      <Link href="mailto:nik@kiselev.dev" variant="button" color="primary">
        nik@kiselev.dev
      </Link>
    </Box>
  )
}

export default FooterMail
