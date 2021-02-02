import { Box, Divider } from '@material-ui/core'
type Props = {
  variant?: 'middle' | 'inset' | 'fullWidth' | undefined
}

const ContentDivider = (props: Props) => (
  <Box my={2}>
    <Divider variant={props.variant} />
  </Box>
)

export default ContentDivider
