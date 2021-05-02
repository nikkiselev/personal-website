import { SitemapStream, streamToPromise } from 'sitemap'

const pages = ['/']

export default async (host: string | undefined) => {
  const smStream = new SitemapStream({
    hostname: 'https://' + host,
  })

  pages.forEach((page) =>
    smStream.write({
      url: page,
    })
  )

  smStream.end()

  return await streamToPromise(smStream).then((sm) => sm.toString())
}
