import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
  },
  typography: {
    fontFamily: '"Ubuntu", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
})

export default responsiveFontSizes(theme)
