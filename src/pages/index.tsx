import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'

const Home = () => {
  return (
    <div className="container mx-auto">
      <SubHeader />
      <hr className="divider" />
      <Bio />
      <p className="page-title" id="skills">
        Skill Set
      </p>
      <SkillsSection />
      <p className="page-title" id="experience">
        Experience
      </p>
      <Jobs />
      <p className="page-title">Education</p>
      <Education />
    </div>
  )
}

export default Home
