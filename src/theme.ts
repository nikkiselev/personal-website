import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Ubuntu", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
})

export default responsiveFontSizes(theme)
