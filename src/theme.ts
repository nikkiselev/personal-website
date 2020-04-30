import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
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
