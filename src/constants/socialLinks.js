import React from "react"
import {
  FaLinkedin,
  // FaDribbbleSquare,
  // FaBehanceSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon" size="48"></FaGithubSquare>,
    url: "https://github.com/RamiMustaklem",
    ariaLabel: "Github link",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" size="48"></FaLinkedin>,
    url: "https://www.linkedin.com/in/ramimustaklem",
    ariaLabel: "LinkedIn link",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon" size="48"></FaTwitterSquare>,
    url: "https://www.twitter.com/RamiMustaklem",
    ariaLabel: "Twitter link",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" aria-label={link.ariaLabel}>
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
