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
    <Container className={classes.root} maxWidth="md">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2">
            <Box fontWeight="bold">Hi, I'm Nikolai</Box>
          </Typography>

          <Box
            display={{ xs: 'flex', md: 'none' }}
            justifyContent="center"
            marginY={3}
          >
            <Avatar />
          </Box>

          <SubTitle text="A Full Stack" />
          <SubTitle text="Web Developer" />

          <Box mt={3}>
            <SubHeaderActions />
          </Box>
        </Grid>

        <Box display={{ xs: 'none', md: 'flex' }} justifyContent="center" clone>
          <Grid item xs={12} md={6}>
            <Avatar />
          </Grid>
        </Box>
      </Grid>
    </Container>
  )
}

export default SubHeader
