import { Avatar as MUIAvatar, Box } from '@material-ui/core'

const size = '280px!important'

const Avatar = () => (
  <Box height={size} width={size} borderRadius="50%" clone>
    <img src="/images/avatar.jpeg" alt="Nikolai Kiselev avatar" />
  </Box>
)

export default Avatar
