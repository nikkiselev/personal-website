import { Category } from 'js/types'
import SkillsCategory from './SkillsCategory'
import content from 'content/home.json'

const Skills = () => {
  const items = content.skills.map((item: Category) => (
    <SkillsCategory category={item} key={item.name} />
  ))

  return <div>{items}</div>
}

export default Skills
