import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query CopyrightQuery {
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
  return site.siteMetadata
}
