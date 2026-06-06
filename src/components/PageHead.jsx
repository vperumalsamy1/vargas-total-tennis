import { useEffect } from 'react'

// Imperatively updates <html lang>, <title>, <meta description>,
// and <link rel="alternate" hreflang> for each route.
// No external library needed.
export default function PageHead({ seo }) {
  useEffect(() => {
    document.title = seo.title
    document.documentElement.setAttribute('lang', seo.lang)

    // Meta description
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = seo.description

    // hreflang alternates — remove stale ones, add fresh
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((l) => l.remove())
    Object.entries(seo.hreflang).forEach(([lang, href]) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = lang
      link.href = href
      document.head.appendChild(link)
    })

    return () => {
      // Reset lang to English when component unmounts
      document.documentElement.setAttribute('lang', 'en')
    }
  }, [seo])

  return null
}
