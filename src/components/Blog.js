import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

const Blog = ({ title, image, date, category, desc, url }) => {
  return (
    <a
      href={url}
      className="blog"
      aria-label="Navigate to Blog Post"
      key={title}
      target="_blank"
      rel="noreferrer"
    >
      <article>
        {image ? (
          <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        ) : null}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </a>
  )
}

Blog.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default Blog
