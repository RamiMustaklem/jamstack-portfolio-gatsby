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
const SEO = ({ title, description }) => {
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

      {/* twitter cards */}
      <meta name="twitter:site" content="https://www.ramimustaklem.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* facebook cards */}
      <meta property="og:url" content="https://www.ramimustaklem.com/" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:type" content={`website`} />
      <meta property="fb:app_id" content={``} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          url: "https://www.ramimustaklem.com",
          name: "Rami Mustaklem' Portfolio",
          jobTitle: "Full Stack Developer",
          image: `${siteUrl}${image}`,
          department: "Software Engineering",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+972-54-634-8562",
            contactType: "Personal Phone",
          },
        })}
      </script>
    </Helmet>
  )
}

export default SEO
