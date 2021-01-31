import React, { useRef, useEffect } from "react"

export const Comments = props => {
  const comment_ref = useRef()

  useEffect(() => {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://utteranc.es/client.js"
    script.setAttribute("repo", "BHennen/BHennen.github.io")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("theme", "github-light")
    script.setAttribute("crossorigin", "anonymous")
    comment_ref.current.appendChild(script)
  }, [])

  return <section ref={comment_ref}></section>
}

export default Comments
