import { Category } from 'js/types'

type Props = {
  category: Category
}

const SkillsCategory = (props: Props) => {
  return (
    <div className="mb-2">
      <span className="font-bold">{props.category.name}:&nbsp;</span>
      <span>{props.category.stack}</span>
    </div>
  )
}

export default SkillsCategory
