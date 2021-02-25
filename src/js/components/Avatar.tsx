import Image from 'next/image'

const size = '280px!important'

const Avatar = () => (
  <Image
    className="rounded-full"
    src="/images/avatar.jpeg"
    height={size}
    width={size}
    loading="eager"
    alt="Nikolai Kiselev avatar"
  />
)

export default Avatar
