import { Category } from 'js/types'

type Props = {
  category: Category
}

const SkillsCategory = (props: Props) => {
  return (
    <div>
      <span>{props.category.name}</span>
      <span>{props.category.stack}</span>
    </div>
  )
}

export default SkillsCategory
