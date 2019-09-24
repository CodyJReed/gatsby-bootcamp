import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  console.log(posts)
  return (
    <Layout>
      <h1>Blog</h1>
    </Layout>
  )
}

export default BlogPage
