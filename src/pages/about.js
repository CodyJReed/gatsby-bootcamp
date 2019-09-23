import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        This is my About section. It provides a brief overview of myself, what
        drives me, and some of my passions.
      </p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </div>
  )
}

export default AboutPage
