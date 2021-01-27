import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import StackOverflow from './StackOverflow'

const SocialMedia = () => {
  const color = '#000'

  return (
    <>
      <a
        href="https://www.linkedin.com/in/nikkiselev"
        aria-label="Nikolai Kiselev LinkedIn profile"
      >
        <LinkedIn htmlColor={color} fontSize="large" titleAccess="LinkedIn" />
      </a>
      &nbsp;
      <a
        href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile"
        aria-label="Nikolai Kiselev Stack Overflow profile"
      >
        <StackOverflow
          htmlColor={color}
          fontSize="large"
          titleAccess="Stack Overflow"
        />
      </a>
      &nbsp;
      <a href="https://github.com/nikkiselev">
        <GitHub
          htmlColor={color}
          fontSize="large"
          titleAccess="GitHub"
          aria-label="Nikolai Kiselev GitHub profile"
        />
      </a>
    </>
  )
}

export default SocialMedia
