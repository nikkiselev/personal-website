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
import PageSection from './PageSection'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('xs')]: {
        marginTop: theme.spacing(5),
      },
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(12),
      },
      marginBottom: theme.spacing(25),
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
  <Typography variant="subtitle1" color="textSecondary">
    <Box fontWeight="bold" letterSpacing={5}>
      {props.text}
    </Box>
  </Typography>
)

const SubHeader = () => {
  const classes = useStyles()

  return (
    <PageSection ptXs={1}>
      <Container className={classes.root} maxWidth="md">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" color="textSecondary">
              <Box fontWeight="bold" mb={4}>
                Hi, I'm Nikolai
              </Box>
            </Typography>

            <Box
              display={{ xs: 'flex', md: 'none' }}
              justifyContent="center"
              my={3}
            >
              <Avatar />
            </Box>

            <SubTitle text="A Full Stack" />
            <SubTitle text="Web Developer" />

            <Box mt={4}>
              <SubHeaderActions />
            </Box>
          </Grid>

          <Box
            display={{ xs: 'none', md: 'flex' }}
            justifyContent="flex-end"
            clone
          >
            <Grid item xs={12} md={6}>
              <Avatar />
            </Grid>
          </Box>
        </Grid>
      </Container>
    </PageSection>
  )
}

export default SubHeader
