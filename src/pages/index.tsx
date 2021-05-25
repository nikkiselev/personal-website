import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'

const Home = () => {
  return (
    <div className="">
      <div className="">
        <SubHeader />
        <Bio />
        <h2>Skill Set</h2>
        <SkillsSection />
        <h2>Experience</h2>
        <Jobs />
        <h2>Education</h2>
        <Education />
        <h2>Work with me</h2>
      </div>
    </div>
  )
}

export default Home
