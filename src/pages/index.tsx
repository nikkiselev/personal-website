import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'
import ContentDivider from 'js/components/ContentDivider'
import PageSubTitle from 'js/components/PageSubTitle'

const Home = () => {
  return (
    <div className="container mx-auto">
      <SubHeader />
      <ContentDivider />
      <Bio />
      <PageSubTitle text="Skill Set" id="skills" />
      <SkillsSection />
      <PageSubTitle text="Experience" id="experience" />
      <Jobs />
      <PageSubTitle text="Education" />
      <Education />
    </div>
  )
}

export default Home
