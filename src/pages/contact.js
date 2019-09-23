import React from "react"

import HeaderNav from "../components/HeaderNav"
import Footer from "../components/Footer"

const ContactPage = () => {
  return (
    <div>
      <HeaderNav />
      <h1>Contact</h1>
      <p>
        Want to get ahold of me? Contact me via{" "}
        <a
          href="https://www.linkedin.com/in/cody-reed-287511108/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
