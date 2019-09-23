import React from "react"
import { Link } from "gatsby"

import HeaderNav from "../components/HeaderNav"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div>
      <HeaderNav />
      <h1> Hello.</h1>
      <h2>I'm Cody, a full-stack developer looking to leave Knoxville.</h2>
      <p>
        Need a Developer? <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}
export default IndexPage
