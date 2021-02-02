import { Typography } from '@material-ui/core'
import ContentDivider from './ContentDivider'

type Props = {
  text: string
  color?: any
  id?: string
}

const PageSubTitle = (props: Props) => (
  <>
    <ContentDivider variant="middle" />
    <Typography
      variant="h4"
      color={props.color ? props.color : 'textPrimary'}
      id={props.id}
      align="center"
    >
      {props.text}
    </Typography>
    <ContentDivider variant="middle" />
  </>
)

export default PageSubTitle
