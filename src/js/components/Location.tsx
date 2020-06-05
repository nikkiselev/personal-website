import { Typography, Box } from '@material-ui/core'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'
import content from 'content/home.json'

const Location = () => {
  return (
    <Box
      mt={3}
      display="flex"
      alignItems="center"
      justifyContent={{ xs: 'center' }}
    >
      <Box mr={1} clone>
        <RoomOutlinedIcon />
      </Box>
      <Typography color="primary">{content.location}</Typography>
    </Box>
  )
}

export default Location
