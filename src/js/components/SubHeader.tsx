import Avatar from './Avatar'
import SubHeaderActions from './SubHeaderActions'

const SubHeader = () => {
  return (
    <div className="flex flex-col">
      <span className="font-bold flex justify-center text-3xl mb-14">
        Nikolai Kiselev
      </span>

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
