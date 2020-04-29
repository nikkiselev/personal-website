import { Box } from '@material-ui/core'

const padding = 20
const PageSection = (props: any) => (
  <Box
    py={padding}
    pb={props.noPb ? 0 : padding}
    bgcolor={props.gray ? '#fafafa' : ''}
  >
    {props.children}
  </Box>
)

export default PageSection
