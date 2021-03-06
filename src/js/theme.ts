import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { grey, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: grey,
    background: {
      default: '#20222d',
    },
    text: {
      secondary: '#fff',
      primary: '#000',
    },
  },
  typography: {
    fontFamily: '"Ubuntu", "Helvetica", "Arial", sans-serif',
    fontSize: 18,
  },
})

export default responsiveFontSizes(theme)

// charade: '#20222d',
// trendy: '#99609e',
// ronBurgundy: '#a13153',
// cerseiRed: '#E03F6F',
// yueGuangLanBlue: '#1e3799',
// dimGray: '#696969'
