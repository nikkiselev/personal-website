import Image from 'next/image'

const size = 84

type Props = {
  className?: string
}
const Avatar = (props: Props) => (
  <div className="mr-3" style={{ minWidth: size }}>
    <Image
      className={'rounded-full ' + (props.className ? props.className : '')}
      src="/images/avatar.jpeg"
      height={size}
      width={size}
      loading="eager"
      alt="Nikolai Kiselev avatar"
    />
  </div>
)

export default Avatar
