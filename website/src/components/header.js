import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Header = (props) => {
    // determined if page has scrolled and if the view is on mobile
    const [scrolled, setScrolled] = useState(false)

    // change state on scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled)
            }
        }

        document.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            // clean up the event handler when the component unmounts
            document.removeEventListener("scroll", handleScroll)
        }
    }, [scrolled])

    return (
        <header data-active={scrolled}>
            <nav>
                {/* <Link to="/about/">{props.header_text}</Link> */}
                {/* <Link to="/contact/">Contact Us</Link> */}
            </nav>
        </header>
    )
}

export default Header
