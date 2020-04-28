import { Link, Box } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'

const FooterMail = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ xs: 'center', md: 'left' }}
    >
      <Box mr={1} clone>
        <MailOutlineIcon />
      </Box>

      <Link href="mailto:nik@kiselev.dev">nik@kiselev.dev</Link>
    </Box>
  )
}

export default FooterMail
