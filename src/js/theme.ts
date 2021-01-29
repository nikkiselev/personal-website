import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    background: {
      default: '#fff',
    },
    text: {
      secondary: '#000',
      primary: '#000',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Arial", sans-serif',
    fontSize: 16,
  },
})

export default responsiveFontSizes(theme)
