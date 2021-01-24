import React from "react"
import useScrollStatus from "./hooks/scroll-state"
import { Transition } from "react-transition-group"

const ReturnToTop = props => {
  const scrolled = useScrollStatus(10)

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  const containerStyles = {
    transition: "all 1s linear",
    position: "fixed",
    bottom: "1.2rem",
    right: "1.2rem",
    opacity: 0,
    visibility: scrolled ? "visible" : "hidden",
  }

  const arrowStyles = {
    width: "2.5rem",
    height: "2.5rem",
  }

  return (
    <Transition in={scrolled} timeout={500}>
      {state => (
        <a
          id="ReturnTop"
          href="#top-of-page"
          style={{ ...containerStyles, ...transitionStyles[state] }}
        >
          <span class="screen-reader-text">Return to top of page.</span>
          <svg viewBox="0 0 54 54" style={{ ...arrowStyles }}>
            <g>
              <path
                d="M27,0C12.112,0,0,12.112,0,27s12.112,27,27,27s27-12.112,27-27S41.888,0,27,0z M27,52C13.215,52,2,40.785,2,27
		S13.215,2,27,2s25,11.215,25,25S40.785,52,27,52z"
              />
              <path
                d="M28.884,17.355c-0.307-0.53-0.855-0.848-1.469-0.848s-1.162,0.317-1.469,0.848l-8.719,15.102
		c-0.307,0.531-0.306,1.165,0,1.695C17.534,34.684,18.083,35,18.696,35h17.438c0.613,0,1.162-0.316,1.469-0.848
		c0.306-0.53,0.307-1.164,0-1.695L28.884,17.355z M19.224,33l8.191-14.188L35.606,33H19.224z"
              />
            </g>
          </svg>
        </a>
      )}
    </Transition>
  )
}

export default ReturnToTop
