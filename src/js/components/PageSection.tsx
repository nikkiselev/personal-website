import { Box } from '@material-ui/core'

const PageSection = (props: any) => (
  <Box py={20} clone>
    {props.children}
  </Box>
)

export default PageSection
