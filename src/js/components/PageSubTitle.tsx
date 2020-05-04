import { Typography, Box } from '@material-ui/core'

type Props = {
  text: string
  color?: any
  id?: string
}
export default (props: Props) => (
  <Typography
    variant="h3"
    color={props.color ? props.color : 'textPrimary'}
    id={props.id}
  >
    <Box fontWeight="bold" textAlign="center" my={5}>
      {props.text}
    </Box>
  </Typography>
)
