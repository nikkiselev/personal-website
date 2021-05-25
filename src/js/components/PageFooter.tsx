import content from 'content/home.json'

const PageFooter = () => {
  return (
    <div>
      <p>{content.footerText}</p>
      <a href="mailto:nik@kiselev.dev">nik@kiselev.dev</a>

      <p>
        <a
          href="https://www.linkedin.com/in/nikkiselev"
          aria-label="Nikolai Kiselev LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        &nbsp;•&nbsp;
        <a
          href="https://stackoverflow.com/users/5964023/nikolai-kiselev?tab=profile"
          aria-label="Nikolai Kiselev Stack Overflow profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stack Overflow
        </a>
        &nbsp;•&nbsp;
        <a
          href="https://github.com/nikkiselev"
          aria-label="Nikolai Kiselev GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  )
}

export default PageFooter
