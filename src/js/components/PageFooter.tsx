import PageSubTitle from './PageSubTitle'
import content from 'content/home.json'

const PageFooter = () => {
  return (
    <div className="container flex flex-col justify-center">
      <PageSubTitle
        text="Work with me"
        id="work-with-me"
        color="textSecondary"
      />

      <p className="paragraph">{content.footerText}</p>

      <a
        className="text-center justify-self-center"
        href="mailto:nik@kiselev.dev"
      >
        nik@kiselev.dev
      </a>

      <p>I'm also on:</p>
      <div className="text-center">
        <a
          href="https://www.linkedin.com/in/nikkiselev"
          aria-label="Nikolai Kiselev LinkedIn profile"
        >
          LinkedIn
        </a>
        &nbsp;
        <a
          href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile"
          aria-label="Nikolai Kiselev Stack Overflow profile"
        >
          Stack Overflow
        </a>
        &nbsp;
        <a href="https://github.com/nikkiselev">GitHub</a>
      </div>
    </div>
  )
}

export default PageFooter
