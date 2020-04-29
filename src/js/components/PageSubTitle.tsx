import { Typography, Box } from '@material-ui/core'

type Props = {
  text: string
}
export default (props: Props) => (
  <Typography variant="h3">
    <Box fontWeight="bold" textAlign="center" mb={5}>
      {props.text}
    </Box>
  </Typography>
)
