import Avatar from './Avatar'
import ThemeToggle from './ThemeToggle'

const SubHeader = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center font-bold text-3xl mb-14 text-black dark:text-white">
        Nikolai Kiselev
        <ThemeToggle />
      </div>
      <div className="flex">
        <Avatar />
        <span>
          A full-stack web developer based in Kuala Lumpur, Malaysia.{' '}
          <br className="hidden md:inline" /> I build modern and secure web
          applications.
        </span>
      </div>
    </div>
  )
}

export default SubHeader
