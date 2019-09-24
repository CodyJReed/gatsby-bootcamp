import React from "react"

import HeaderNav from "./headerNav"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
