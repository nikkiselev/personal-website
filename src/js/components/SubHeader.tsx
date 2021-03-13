import Avatar from './Avatar'
import SubHeaderActions from './SubHeaderActions'
import SocialMedia from './SocialMedia'

const SubHeader = () => {
  return (
    <div>
      <span>Nikolai Kiselev</span>

      <div>
        <Avatar />

        <span>
          A full-stack web developer based in Kuala Lumpur, Malaysia. I build
          modern and secure web applications.
        </span>
      </div>

      <SubHeaderActions />

      <SocialMedia />

      <Avatar />
    </div>
  )
}

export default SubHeader
