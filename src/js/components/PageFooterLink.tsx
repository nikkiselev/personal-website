import { Box, Link } from '@material-ui/core'

type Props = {
  text: string
  href: string
}

const FooterLink = (props: Props) => {
  return (
    <Box my={1}>
      <Link
        variant="body1"
        href={props.href}
        color="textSecondary"
        underline="always"
      >
        {props.text}
      </Link>
    </Box>
  )
}

export default FooterLink
