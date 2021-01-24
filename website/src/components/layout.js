import React from "react"
import Header from "./header"
import { MDXProvider } from "@mdx-js/react"
import GoldenSpiral from "./spiral"
import Copyright from "./copyright"
import ReturnToTop from "./return-to-top"

const shortcodes = { GoldenSpiral }

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div id="top-of-page" className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </main>
      <footer>
        <Copyright />
        <ReturnToTop /> 
      </footer>
    </div>
  )
}

export default Layout
