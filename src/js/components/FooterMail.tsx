import { Box, Button } from '@material-ui/core'

const FooterMail = () => {
  return (
    <Box my={3}>
      <Button href="mailto:nik@kiselev.dev" variant="contained" color="primary">
        Contact me
      </Button>
    </Box>
  )
}

export default FooterMail
