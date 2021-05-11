import Avatar from './Avatar'
//@todo remove
import SubHeaderActions from './SubHeaderActions'
import ThemeToggle from './ThemeToggle'

const SubHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center font-bold text-2xl mb-14">
        Nikolai Kiselev
        <ThemeToggle />
      </div>
      <div className="flex">
        <Avatar />
        <p>
          A full-stack web developer based in Kuala Lumpur, Malaysia. I build
          modern and secure web applications.
        </p>
      </div>

      {/* <SubHeaderActions /> */}
    </div>
  )
}

export default SubHeader
