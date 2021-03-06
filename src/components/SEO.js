import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description, page }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />

      <meta
        name="keyword"
        content="ramimustaklem, Rami Mustaklem, Rami, Mustaklem, portfolio, gatsby, react, react native, javascript, developer"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=yes"
      />

      <link rel="canonical" href={`${siteUrl}${page}`} />

      {/* twitter cards */}
      <meta name="twitter:site" content={`${siteUrl}${page}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* facebook cards */}
      <meta property="og:url" content={`${siteUrl}${page}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:type" content={`website`} />
      <meta property="fb:app_id" content={``} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          url: siteUrl,
          name: "Rami Mustaklem",
          jobTitle: "Full Stack Web Developer",
          image: `${siteUrl}${image}`,
          department: "Software Engineering",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+972-54-634-8562",
            email: "i@ramimustaklem.com",
            contactType: "Personal",
          },
        })}
      </script>
    </Helmet>
  )
}

export default SEO
