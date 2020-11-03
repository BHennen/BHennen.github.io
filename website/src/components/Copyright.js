import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Copyright(props) {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
            }
            copyright
          }
        }
      }
    `
  )
  
  const site_author = site?.siteMetadata?.author?.name
  const copyright = site?.siteMetadata?.copyright
  let cur_year = new Date().getFullYear()

  return (
    <div>
      © {copyright}
      {cur_year > copyright ? ` - ` + cur_year : ``}
      {` `}
      {site_author}
    </div>
  )
        
}
