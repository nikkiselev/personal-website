import { Grid, makeStyles, createStyles, Box, Link } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    tab: {},
  })
)

type MobileMenuItemProps = {
  label: string
  href: string
}

const MobileMenuItem = (props: MobileMenuItemProps) => {
  const classes = useStyles()

  return (
    <Box textAlign="center" clone>
      <Grid item xs={6}>
        <Link className={classes.tab} href={props.href} color="textSecondary">
          {props.label}
        </Link>
      </Grid>
    </Box>
  )
}

export default MobileMenuItem
