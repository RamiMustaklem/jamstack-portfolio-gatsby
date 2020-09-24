import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Contact me regarding working on Performance Optimization, JavaScript, React, Gatsby, NextJS, Angular and WordPress/WooCommerce."
        page="/contact/"
      />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form action="https://formspree.io/mwkrnaeb" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                aria-label="Your name"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
                aria-label="Your email"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                aria-label="Your message"
              />
            </div>
            <button
              type="submit"
              className="submit-btn btn"
              aria-label="submit form"
            >
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
