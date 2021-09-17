import { NextApiResponse, NextApiRequest } from 'next'

const Robots = async (req: NextApiRequest, res: NextApiResponse) => {
  const content = `Sitemap: https://${req.headers.host}/sitemap.xml`

  res.write(content)
  res.end()
}
export default Robots
