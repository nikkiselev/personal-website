import { Box } from '@material-ui/core'
import theme from '../../theme'

const padding = 20
const color: any = theme.palette.primary

const PageSection = (props: any) => (
  <Box
    py={padding}
    pb={props.noPb ? 0 : padding}
    bgcolor={props.gray ? color['50'] : ''}
  >
    {props.children}
  </Box>
)

export default PageSection
