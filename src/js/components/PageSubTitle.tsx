type Props = {
  text: string
  color?: any
  id?: string
}

const PageSubTitle = (props: Props) => (
  <>
    <hr className="divider" />
    <span>{props.text}</span>
    <hr className="divider" />
  </>
)

export default PageSubTitle
