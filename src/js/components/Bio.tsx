import content from 'content/home.json'

const Bio = () => {
  return (
    <div>
      <h2>{content.bioTitle}</h2>

      {content.bio.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  )
}

export default Bio
