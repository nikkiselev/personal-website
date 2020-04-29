import {
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Box,
} from '@material-ui/core'
import Avatar from './Avatar'
import SubHeaderActions from './SubHeaderActions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // height: '100%',
      marginTop: theme.spacing(5),
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  })
)

type SubTitle = {
  text: string
}

const SubTitle = (props: SubTitle) => (
  <Typography variant="subtitle1">
    <Box fontWeight="bold" letterSpacing={5}>
      {props.text}
    </Box>
  </Typography>
)

const SubHeader = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">
            <Box fontWeight="bold">Hi, I'm Nikolai</Box>
          </Typography>

          <Box display="flex" justifyContent="center" marginY={3}>
            <Avatar />
          </Box>

          <SubTitle text="A Full Stack" />
          <SubTitle text="Web Developer" />

          <Box mt={3}>
            <SubHeaderActions />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SubHeader
