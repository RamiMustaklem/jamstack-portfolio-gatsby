import React from "react"
import { FaCode, FaWordpress, FaJsSquare } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaJsSquare className="service-icon" />,
    title: "web development",
    text:
      "I take web development projects from A to Z. Frontend, Backend and Whatever needs to be done to deliver Full stack web applications.",
  },
  {
    id: 2,
    icon: <FaWordpress className="service-icon" />,
    title: "WordPress/WooCommerce",
    text:
      "I deliver WordPress web applications fully setup with WooCommerce, Multi-lingual, with SEO, Analytics Tracking and Performance Optimizations.",
  },
  {
    id: 3,
    icon: <FaCode className="service-icon" />,
    title: "DevOps/Automation",
    text:
      "I setup Cloud solutions according to each projects needs. I'm familiar with Amazon AWS, Microsoft Azure or DigitalOcean. Micro-services, Databases, Storage, Serverless Functions, etc...",
  },
]
