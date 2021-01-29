import { Typography, Box } from '@material-ui/core'

type Props = {
  text: string
  color?: any
  id?: string
}

const PageSubTitle = (props: Props) => (
  <Typography
    variant="h4"
    color={props.color ? props.color : 'textPrimary'}
    id={props.id}
    align="center"
  >
    <Box mb={5}>{props.text}</Box>
  </Typography>
)

export default PageSubTitle
