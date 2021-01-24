import React from "react"
import { useSiteMetadata } from "./hooks/use-site-metadata"

export const Copyright = (props) => {
  const { author, copyright } = useSiteMetadata()
  const site_author = author.name
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

export default Copyright