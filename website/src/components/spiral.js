import React, { useRef, useEffect, useState } from "react"

const GoldenSpiral = props => {
    let spiral_ref = useRef()

    const [offsetAngle, setOffsetAngle] = useState(props.offsetAngle) // Rotation of the spiral
    const [stepSize, setStepSize] = useState(0.05) // Precision of the spiral (how smooth the spiral looks)
    const [scale, setScale] = useState(0.001) //eslint-disable-line

    function getMaxRadius(centerPoint, rectBounds) {
        // Gets the maximum radius that the circle will be drawn at
        // Get the maximum absolute distance to the edge of the rectangle bounds in the x and y direction from the center point
        let maxX = Math.max(
            Math.abs(rectBounds.left - centerPoint.x),
            Math.abs(rectBounds.right - centerPoint.x))
        let maxY = Math.max(
            Math.abs(rectBounds.top - centerPoint.y),
            Math.abs(rectBounds.bottom - centerPoint.y)
        )
        // Return the hypotenuse of the two distances to get the distance from the center to the corner of the bounds
        return Math.hypot(maxX, maxY)
    }

    function polarToCartesian(r, angle) {
        // Converts polar coordinates to cartesian coordinates
        let x = r * Math.cos(angle)
        let y = r * Math.sin(angle)
        return [x, y]
    }

    function getSpiralCenter(width, height) {
        let x = width / 2,
            y = height / 2
        return {x:x, y:y}
    }
    
    useEffect(() => {
        const phi = 0.5 * (1 + Math.sqrt(5)) // Golden number


        function drawSpiral(canvasContext) {
            let width = canvasContext.canvas.width
            let height = canvasContext.canvas.height

            // Move to center of canvas
            let centerPoint = getSpiralCenter(width, height)
            let x = centerPoint.x,
                y = centerPoint.y
            canvasContext.beginPath()
            canvasContext.moveTo(x, y)

            // While the radius of the spiral is in the bounds of the canvas, iteratively draw lines that represent the spiral
            let canvasBounds = { left: 0, top: 0, right: width, bottom: height }
            let maxRadius = getMaxRadius(centerPoint, canvasBounds)
            let angle = 0
            let r = 0
            while (r < maxRadius) {
                r = scale * Math.pow(phi, angle)
                let [offset_x, offset_y] = polarToCartesian(
                    r,
                    angle + offsetAngle
                )
                x += offset_x
                y += offset_y
                canvasContext.lineTo(x, y)
                angle += stepSize
            }
            canvasContext.lineWidth = 2
            canvasContext.stroke()
        }

        let canvas = spiral_ref.current
        let canvasContext = canvas.getContext("2d")

        const mediaQueryList = window.matchMedia(
            `(resolution: ${window.devicePixelRatio}dppx)`
        )

        const updatePixelRatio = () => {
            let ratio = window.devicePixelRatio
            let width = getComputedStyle(canvas)
                .getPropertyValue("width")
                .slice(0, -2)
            let height = getComputedStyle(canvas)
                .getPropertyValue("width") //FIXME: Make the height of the canvas equal to the width using CSS
                .slice(0, -2)
            canvas.width = width * ratio
            canvas.height = height * ratio
            drawSpiral(canvasContext)
        }

        updatePixelRatio()

        mediaQueryList.addEventListener("change", updatePixelRatio)

        drawSpiral(canvasContext)

        return () => {
            mediaQueryList.removeEventListener("change", updatePixelRatio)
        }; 
    }, [offsetAngle, stepSize, scale]) //Update spiral when any of these values change (prevents redrawing on every frame render)

    return (
        <div>
            <span style={{ width: "50%", display: "inline-block" }}>
                Step Size:
                <input
                    label="Step Size"
                    onChange={val => setStepSize(Number(val.target.value))}
                    type="range"
                    min="0.01"
                    max="1"
                    step="0.01"
                    value={stepSize}
                />
            </span>
            <span style={{ width: "50%", display: "inline-block" }}>
                Offset Angle:
                <input
                    label="Offset Angle"
                    onChange={val => setOffsetAngle(Number(val.target.value))}
                    type="range"
                    min="0"
                    max={2 * Math.PI}
                    step="0.05"
                    value={offsetAngle}
                />
            </span>
            <canvas
                ref={spiral_ref}
                style={{ width: "100%", display: "inline-block" }}
            />
        </div>
    )
}

export default GoldenSpiral
