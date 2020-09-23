import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Blogs from "../components/Blogs"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO
        title="Full Stack Web Developer Portfolio"
        description="My Personal Portfolio, Rami Mustaklem, Full Stack Web Developer, Performance Optimization, JavaScript, React/Native, Angular, NodeJS and WordPress/WooCommerce."
      />
      <Hero />
      <Services />
      <Jobs />
      <Blogs blogs={blogs} title="latest articles" showLink />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(
      filter: { display: { eq: true }, featured: { eq: true } }
    ) {
      nodes {
        github
        id
        description
        title
        url
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs {
      nodes {
        id
        slug
        title
        date(formatString: "MMMM Do, YYYY")
        desc
        category
        url
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
