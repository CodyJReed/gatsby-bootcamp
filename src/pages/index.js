import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1> Hello.</h1>
      <h2>I'm Cody, a full-stack developer looking to leave Knoxville.</h2>
      <p>
        Need a Developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}
export default IndexPage
