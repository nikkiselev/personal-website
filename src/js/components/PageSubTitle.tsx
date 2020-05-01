import { Typography, Box } from '@material-ui/core'

type Props = {
  text: string
  color?: any
}
export default (props: Props) => (
  <Typography variant="h3" color={props.color ? props.color : 'textPrimary'}>
    <Box fontWeight="bold" textAlign="center" mb={5}>
      {props.text}
    </Box>
  </Typography>
)
