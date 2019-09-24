import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerNavStyles from "./headerNav.module.scss"

const HeaderNav = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerNavStyles.header}>
      <h1>
        <Link to="/" className={headerNavStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerNavStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerNavStyles.navItem}
              activeClassName={headerNavStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerNavStyles.navItem}
              activeClassName={headerNavStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerNavStyles.navItem}
              activeClassName={headerNavStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerNavStyles.navItem}
              activeClassName={headerNavStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
