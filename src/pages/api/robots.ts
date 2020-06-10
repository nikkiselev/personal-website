import { NextApiResponse, NextApiRequest } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const content = `Sitemap: https://${req.headers.host}/sitemap.xml`

  res.write(content)
  res.end()
}
