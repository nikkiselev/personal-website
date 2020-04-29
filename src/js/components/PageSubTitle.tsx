import { Typography, Box } from '@material-ui/core'

type Props = {
  text: string
}
export default (props: Props) => (
  <Typography variant="h5">
    <Box fontWeight="bold" mb={1}>
      {props.text}
    </Box>
  </Typography>
)