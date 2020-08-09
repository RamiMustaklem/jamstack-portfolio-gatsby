import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ProjectPage = ({ data: { strapiProjects: project } }) => {
  console.log("project", project)
  if (!project) return null
  const { title, description, image, gallery, url, github, stack } = project
  return (
    <Layout>
      <SEO title={`${project.title} Project`} description="" />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={""} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectQuery($id: Int!) {
    strapiProjects(strapiId: { eq: $id }) {
      featured
      github
      description
      created_at(fromNow: true)
      title
      updated_at(fromNow: true)
      url
      stack {
        id
        title
      }
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      images {
        alternativeText
        id
        name
        caption
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default ProjectPage
