import {
  Grid,
  createStyles,
  makeStyles,
  Typography,
  Link,
  Theme,
} from '@material-ui/core'
import FooterBar from './FooterBar'
import FooterMail from './FooterMail'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
    },
    content: {
      textAlign: 'center',
    },
    text: {
      // marginBottom: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  })
)

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.content}>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="h5" className={classes.title}>
            Work with me
          </Typography>

          <Typography variant="body1" className={classes.text}>
            I'm a practical person so if you have a cool project to work on or
            share the feeling that I could be a good fit with your team, reach
            out and let's have a chat!
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.item}>
          <FooterMail />
        </Grid>

        <Grid item xs={12} className={classes.item}>
          <Typography variant="body1">I'm also on</Typography>
        </Grid>

        <Grid item xs={12} className={classes.item}>
          <Link href="https://github.com/nikkiselev">GitHub</Link>
        </Grid>

        <Grid item xs={12} className={classes.item}>
          <Link href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile">
            Stack Overflow
          </Link>
        </Grid>
      </Grid>

      <FooterBar />
    </>
  )
}

export default Footer
