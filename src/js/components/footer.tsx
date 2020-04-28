import { Grid, createStyles, makeStyles, Typography } from '@material-ui/core'
import styles from '../../css/index.module.scss'
import FooterBar from './FooterBar'
import FooterMail from './FooterMail'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 'bold',
    },
    content: {
      textAlign: 'center',
    },
  })
)

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.content}>
        <Grid item xs={12} className={styles.work}>
          <Typography variant="h5" className={classes.title}>
            Work with me
          </Typography>

          <Typography variant="body1">
            I'm a practical person so if you have a cool project to work on or
            share the feeling that I could be a good fit with your team, reach
            out and let's have a chat!
          </Typography>

          <FooterMail />
        </Grid>

        <Grid item xs={12} className={styles.links}>
          <p className={styles.profileText}>I'm also on</p>

          <a
            className={styles.profileLink}
            href="https://github.com/nikkiselev"
          >
            GitHub
          </a>
          <a
            className={styles.profileLink}
            href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile"
          >
            Stack Overflow
          </a>
        </Grid>
      </Grid>

      <FooterBar />
    </>
  )
}

export default Footer
