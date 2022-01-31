import React, {useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"

let hoverCount = 0 // shared hover counter

// Modified from original at https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
const TestThreeBox = props => {
    // This reference will give us direct access to the mesh so we can animate it
    const mesh = useRef<JSX.IntrinsicElements["mesh"]>()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false) // Local hover state
    const [active, setActive] = useState(false) // Local active (clicked) state
    const [time, setTime] = useState(0) //Local animation time
    const [color, setColor] = useState(getRandomColor()) //Local cube color
    const [c, setC] = useState(props.cycles ? props.cycles : 120) // Number of animation cycles
    const activeScale = 2

    function getRandomColor() {
        let val = Math.random()
        let rcolor =
            val < 0.75
                ? val < 0.5
                    ? val < 0.25
                        ? 0x369420
                        : 0x420369
                    : "hotpink"
                : "skyblue"
        return rcolor == color ? getRandomColor() : rcolor
    }

    let updateColor = (t) => {
        if (t > c / 2) {
            setColor(getRandomColor())
        }
    }

    let tick = () => {
        setTime((prevTime) => (prevTime + 1) % c) //loop every c ticks
        let i = (time / c) * 2 * Math.PI //Scale current position in cycle from 0 to 2 pi
        let scale =
            (active ? activeScale : 1) +
            (active ? activeScale : 1) * Math.sin(i) * 0.5
        let tmp = mesh.current.scale
        tmp["x"] = tmp["y"] = tmp["z"] = scale
    }

    useFrame(() => {
        if (!hovered) {
            mesh.current.rotation["x"] = mesh.current.rotation["y"] +=
                c/100 * 0.01 * (active ? 0.5 : 2)

            // continue until we hit a breakpoint at the beginning or middle of loop
            if (time !== 1 && time !== c / 2 + 1) {
                tick()
            }
        } else {
            if (!active && time % (c / 8) == 1) updateColor(time)
            tick()
        }
    })

    useEffect(() => {
        document.body.style.cursor = hoverCount > 0 ? "pointer" : "default"
    }, [hoverCount])

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? [2, 2, 2] : [1, 1, 1]}
            onClick={(e) => {
                e.stopPropagation()
                setActive(!active)
            }}
            onPointerOver={(e) => {
                e.stopPropagation()
                hoverCount++
                setHover(true)
            }}
            onPointerOut={(e) => {
                hoverCount--
                setHover(false)
            }}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial
                attach="material"
                color={hovered || active ? color : "gold"}
            />
        </mesh>
    )
}

export {TestThreeBox}
