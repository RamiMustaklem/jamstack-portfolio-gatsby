import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa/index"
import Image from "gatsby-image/index"
import ReactMarkdown from "react-markdown"
import htmlParser from "react-markdown/plugins/html-parser"

const ProjectPage = ({ data: { strapiProjects: project } }) => {
  if (!project) return null
  const {
    title,
    description,
    image,
    images,
    url,
    github,
    stack,
    updated_at,
    content,
  } = project

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== "script",
    processingInstructions: [],
  })

  return (
    <Layout>
      <SEO title={`${project.title} Project`} description={title} />
      <section className="blog-template project-template">
        <div className="section-center clearfix">
          <h3>{title}</h3>
          <h6>{updated_at}</h6>

          <div className="project-links">
            {github && (
              <a href={github} aria-label="Github Link" title="Github Link">
                <FaGithubSquare className="project-icon" size="48" />
              </a>
            )}
            {url && (
              <a href={url} aria-label="Project Link" title="Project Link">
                <FaShareSquare className="project-icon" size="48" />
              </a>
            )}
          </div>

          {image ? (
            <Image
              fluid={image.childImageSharp.fluid}
              className="project-img-plain"
            />
          ) : null}

          <p
            className="project-desc"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="project-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>

          {images
            ? images.map((image, i) => (
                <div className="project-images" key={i}>
                  <Image
                    title={image.name}
                    alt={image.alternativeText}
                    fluid={image.localFile.childImageSharp.fluid}
                  />
                  <em>{image.caption}</em>
                </div>
              ))
            : null}

          {content ? (
            <ReactMarkdown
              source={content}
              escapeHtml={false}
              astPlugins={[parseHtml]}
              className="content"
            />
          ) : null}

          <Link to="/projects" className="btn center-btn">
            projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectQuery($slug: String!) {
    strapiProjects(slug: { eq: $slug }) {
      featured
      github
      description
      created_at(fromNow: true)
      title
      updated_at(fromNow: true)
      url
      content
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
