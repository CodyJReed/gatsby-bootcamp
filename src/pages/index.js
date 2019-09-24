import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1> Hello.</h1>
      <h2>I'm Cody, a full-stack developer looking to leave Knoxville.</h2>
      <p>
        Need a Developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
