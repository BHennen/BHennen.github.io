import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const PureCopyright = ({ data }) => {
  const site_author = data.site.siteMetadata.author.name
  const copyright = data.site.siteMetadata.copyright
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

const Copyright = props => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            author{
              name
            }
            copyright
          }
        }
      }
    `
  )
  
  return <PureCopyright {...props} data={data}></PureCopyright>
}

export default Copyright