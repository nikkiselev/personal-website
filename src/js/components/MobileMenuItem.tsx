import { Grid, makeStyles, createStyles, Tab, Box } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    tab: {
      textTransform: 'initial',
    },
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
      <Grid item xs={4}>
        <Tab label={props.label} className={classes.tab} href={props.href} />
      </Grid>
    </Box>
  )
}

export default MobileMenuItem
