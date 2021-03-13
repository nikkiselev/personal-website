import FooterMail from './FooterMail'
import PageSubTitle from './PageSubTitle'
import content from 'content/home.json'
import SocialMedia from './SocialMedia'

const PageFooter = () => {
  return (
    <div>
      <PageSubTitle
        text="Work with me"
        id="work-with-me"
        color="textSecondary"
      />

      <span>{content.footerText}</span>

      <FooterMail />

      <span>I'm also on:</span>

      <SocialMedia />
    </div>
  )
}

export default PageFooter
