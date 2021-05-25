import Skills from './Skills'

const year = 2014
const years = new Date().getFullYear() - year

const SkillsSection = () => {
  return (
    <div>
      <p>
        These are the skills I've picked up over my {years} years as a
        professional developer.
      </p>
      <Skills />
    </div>
  )
}

export default SkillsSection
