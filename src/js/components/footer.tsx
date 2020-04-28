import styles from '../../css/footer.module.scss'
import { Grid } from '@material-ui/core'

const Footer: React.FC = () => (
  <Grid container>
    <Grid item xs={12} className={styles.content}>
      &copy; Nikolai Kiselev {new Date().getFullYear()}
    </Grid>
  </Grid>
)

export default Footer
