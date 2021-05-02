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
        <hr className="divider" />
        <Bio />
        <h2 id="skills">Skill Set</h2>
        <SkillsSection />
        <h2 id="experience">Experience</h2>
        <Jobs />
        <h2>Education</h2>
        <Education />
      </div>
    </div>
  )
}

export default Home
