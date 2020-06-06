import { Avatar as MUIAvatar, Box } from '@material-ui/core'

const size = '160px!important'

const Avatar = () => (
  <Box height={size} width={size} clone>
    <MUIAvatar src="/images/avatar.jpeg" />
  </Box>
)

export default Avatar
