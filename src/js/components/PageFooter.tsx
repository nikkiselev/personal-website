import PageSubTitle from './PageSubTitle'
import content from 'content/home.json'

const PageFooter = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center">
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

      <div className="text-center">
        <a
          href="https://www.linkedin.com/in/nikkiselev"
          aria-label="Nikolai Kiselev LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        &nbsp;
        <a
          href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile"
          aria-label="Nikolai Kiselev Stack Overflow profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>
        &nbsp;
        <a
          href="https://github.com/nikkiselev"
          aria-label="Nikolai Kiselev GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default PageFooter
