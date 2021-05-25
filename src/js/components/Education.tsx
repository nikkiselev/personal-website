import content from 'content/home.json'

const Education = () => (
  <div>
    <span className="text-xl font-bold">{content.education.uni}</span>
    <br />
    <span>{content.education.title}</span>
    <br />
    <span className="text-sm">
      {content.education.from} – {content.education.to}
    </span>
  </div>
)

export default Education
