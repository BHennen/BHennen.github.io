import React from "react"
import { Link } from "gatsby"
import useScrollStatus from "./hooks/use-scroll-state"

const Header = (props) => {

    const scrolled = useScrollStatus(10)

    return (
      <header data-active={scrolled}>
        <nav>
          <h1>
            <Link to="/">Bryce Hennen</Link>
          </h1>
        </nav>
      </header>
    )
}

export default Header
