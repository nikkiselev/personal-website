import { Typography, Box } from '@material-ui/core'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined'

const Location = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box mr={1} clone>
        <RoomOutlinedIcon />
      </Box>
      <Typography color="primary">Kuala Lumpur, Malaysia (GMT+8)</Typography>
    </Box>
  )
}

export default Location
