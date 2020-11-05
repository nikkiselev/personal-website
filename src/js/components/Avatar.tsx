import { Box } from '@material-ui/core'
import Image from 'next/image'

const size = '280px!important'

const Avatar = () => (
  <Box borderRadius="50%" clone>
    <Image
      src="/images/avatar.jpeg"
      height={size}
      width={size}
      loading="eager"
      alt="Nikolai Kiselev avatar"
    />
  </Box>
)

export default Avatar
