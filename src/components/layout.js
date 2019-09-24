import React from "react"

import HeaderNav from "./headerNav"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <HeaderNav />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
