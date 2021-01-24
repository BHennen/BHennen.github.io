import { useState, useEffect } from 'react'

const useScrollStatus = scrollBreakpoint => {
  // determined if page has scrolled past a certain point
  const [scrolled, setScrolled] = useState(false)

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > scrollBreakpoint
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled, scrollBreakpoint])

  return scrolled
}

export default useScrollStatus

