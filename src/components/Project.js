import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  slug,
}) => {
  return (
    <article className="project">
      {image ? (
        <Image fluid={image.childImageSharp.fluid} className="project-img" />
      ) : null}
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/project/${slug}/`}>
          <h3>{title || "default title"}</h3>
        </Link>
        <p
          className="project-desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
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
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  slug: PropTypes.string.isRequired,
}

export default Project
