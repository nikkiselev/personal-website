import content from 'content/home.json'

const Bio = () => {
  return (
    <div>
      <p className="page-title">{content.bioTitle}</p>

      {content.bio.map((text) => (
        <p className="paragraph">{text}</p>
      ))}
    </div>
  )
}

export default Bio
