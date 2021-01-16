import React, { useRef, useEffect, useState, useCallback } from "react"

const Spiral = props => {
    let spiral_ref = useRef()

    const phi = 0.5 * (1 + Math.sqrt(5)) // Golden number

    const [offsetAngle, setOffsetAngle] = useState(props.offsetAngle) // Rotation of the spiral
    const [stepSize, setStepSize] = useState(0.05) // Precision of the spiral (how smooth the spiral looks)
    const [scale, setScale] = useState(0.001)

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

    function drawSpiral(canvasContext) {
        let width = canvasContext.canvas.width
        let height = canvasContext.canvas.height

        // Move to center of canvas
        let centerPoint = getSpiralCenter(width, height)
        let x = centerPoint.x, y = centerPoint.y
        canvasContext.beginPath()
        canvasContext.moveTo(x, y)
        
        // While the radius of the spiral is in the bounds of the canvas, iteratively draw lines that represent the spiral
        let canvasBounds = { left: 0, top: 0, right: width, bottom: height}
        let maxRadius = getMaxRadius(centerPoint, canvasBounds)
        let angle = 0
        let r = 0
        while (r < maxRadius) {
            r = scale * Math.pow(phi, angle)
            let [offset_x, offset_y] = polarToCartesian(r, angle + offsetAngle)
            x += offset_x
            y += offset_y
            canvasContext.lineTo(x, y)
            angle += stepSize
        }
        canvasContext.lineWidth = 2
        canvasContext.stroke()
    }

    function getPixelRatio(canvasContext) {
        var backingStore =
            canvasContext.backingStorePixelRatio ||
            canvasContext.webkitBackingStorePixelRatio ||
            canvasContext.mozBackingStorePixelRatio ||
            canvasContext.msBackingStorePixelRatio ||
            canvasContext.oBackingStorePixelRatio ||
            canvasContext.backingStorePixelRatio ||
            1

        return (window.devicePixelRatio || 1) / backingStore
    }

    function fixBlurriness(canvas, canvasContext) {
        // Burriness fix from http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/
        let ratio = getPixelRatio(canvasContext)
        let width = getComputedStyle(canvas)
            .getPropertyValue("width")
            .slice(0, -2)
        let height = getComputedStyle(canvas)
            .getPropertyValue("width") //FIXME: Make the height of the canvas equal to the width using CSS
            .slice(0, -2)

        canvas.width = width * ratio
        canvas.height = height * ratio
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
    }

    useEffect(() => {
        let canvas = spiral_ref.current
        let canvasContext = canvas.getContext("2d")

        fixBlurriness(canvas, canvasContext)
        drawSpiral(canvasContext)

    }, [offsetAngle, stepSize, scale]) //Update spiral when any of these values change (prevents redrawing on every frame render)

    return (
        <div>
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
            Offset Angle:
            <input
                label="Offset Angle"
                onChange={val => setOffsetAngle(Number(val.target.value))}
                type="range"
                min="0"
                max={2*Math.PI}
                step="0.05"
                value={offsetAngle}
            />

            <canvas
                ref={spiral_ref}
                style={{width: "100%"}}
            />
        </div>
    )
}

export default Spiral
