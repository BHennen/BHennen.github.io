import React, { useRef, useEffect, useState, useCallback } from "react"

const getPixelRatio = context => {
    var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1

    return (window.devicePixelRatio || 1) / backingStore
}

const Spiral = props => {
    let spiral_ref = useRef()

    const [theta, setTheta] = useState(props.theta)
    const [time, setTime] = useState(0.0)
    const phi = 0.5 * (1 + Math.sqrt(5))
    let step_size = 0.05 // Precision of the spiral (how smooth the spiral looks)

    function inBounds(x, y, width, height) {
        // Check if the given x and y coordinates are within the given width and height
        return x >= 0 && x <= width && y >= 0 && y <= height
    }

    function polarToCartesian(r, angle) {
        // Converts polar coordinates to cartesian coordinates
        let x = r * Math.cos(angle)
        let y = r * Math.sin(angle)
        return [x, y]
    }

    function getInitOffset(width, height) {
        let x = width / 2,
            y = height / 2
        return [x, y]
    }

    function drawSpiral(canvas_ctx) {
        let width = canvas_ctx.canvas.width
        let height = canvas_ctx.canvas.height

        // Move to center of canvas
        let [x, y] = getInitOffset(width, height)
        canvas_ctx.beginPath()
        canvas_ctx.moveTo(x, y)

        // While the x and y coordinates of the spiral are in bounds, iteratively draw lines that represent the spiral
        let angle = theta
        while (inBounds(x, y, width, height)) {
            let r = 0.001 * Math.pow(phi, angle)
            let [offset_x, offset_y] = polarToCartesian(r, angle + time)
            x += offset_x
            y += offset_y
            canvas_ctx.lineTo(x, y)
            angle += step_size
        }
        canvas_ctx.lineWidth = 2
        canvas_ctx.stroke()
    }

    useEffect(() => {
        let canvas = spiral_ref.current
        let canvas_ctx = canvas.getContext("2d")

        let ratio = getPixelRatio(canvas_ctx)
        let width = getComputedStyle(canvas)
            .getPropertyValue("width")
            .slice(0, -2)
        let height = getComputedStyle(canvas)
            .getPropertyValue("height")
            .slice(0, -2)

        canvas.width = width * ratio
        canvas.height = height * ratio
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`

        drawSpiral(canvas_ctx)
    }, [theta, time]) //Update spiral when theta or time changes

    return (
        <div>
            <input
                onChange={val => setTime(Number(val.target.value))}
                type="range"
                min="0"
                max="20"
                step="0.01"
                value={time}
            />
            <canvas
                ref={spiral_ref}
                style={{ width: "600px", height: "600px" }}
            />
        </div>
    )
}

export default Spiral
