import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import StackOverflow from './StackOverflow'

const SocialMedia = () => (
  <>
    <a href="https://www.linkedin.com/in/nikkiselev">
      <LinkedIn htmlColor="#fff" fontSize="large" titleAccess="LinkedIn" />
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile">
      <StackOverflow
        htmlColor="#fff"
        fontSize="large"
        titleAccess="Stack Overflow"
      />
    </a>
    &nbsp;
    <a href="https://github.com/nikkiselev">
      <GitHub htmlColor="#fff" fontSize="large" titleAccess="GitHub" />
    </a>
  </>
)

export default SocialMedia
