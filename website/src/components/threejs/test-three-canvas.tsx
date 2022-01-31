import React, { useState } from "react"
import { TestThreeBox } from "./test-three-box"
import { Canvas } from "@react-three/fiber"
import { LabeledInputSlider } from "../input/InputSlider"

/**
 * Generates a grid of {@link TestThreeBox} along the [x, y] axes.
 * @param steps [x, y] The number of boxes to generate in the x or y direction.
 * @param start [x, y] The starting coordinate
 * @param stop [x, y] The ending coordinate
 * @returns A flat list of TestThreeBox
 */
function GenBoxes(steps, start, stop): typeof TestThreeBox[] {
    let boxes = []
    let x_scale = (stop[0] - start[0]) / 2
    let step_size = steps.map((nsteps, idx) => {
        if (nsteps == 1) {
            return
        } else {
            return (stop[idx] - start[idx]) / (nsteps - 1)
        }
    })

    for (let i = 0; i < steps[0]; i++) {
        for (let j = 0; j < steps[1]; j++) {
            let x_step =
                steps[0] == 1
                    ? (start[0] + stop[0]) / 2
                    : start[0] + i * step_size[0]
            let y_step =
                steps[1] == 1
                    ? (start[1] + stop[1]) / 2
                    : start[1] + j * step_size[1]
            let z_step = ((x_scale - Math.abs(x_step)) / x_scale) * 3
            boxes.push(
                <TestThreeBox
                    key={j + i * steps[1]}
                    position={[x_step, y_step, -z_step]}
                    cycles={80 + Math.floor(Math.random() * 10) * 32}
                />
            )
        }
    }
    return boxes
}

const TestThreeBoxes = (props) => {
    const [x_steps, setX] = useState(props.steps[0])
    const [y_steps, setY] = useState(props.steps[1])

    return (
        <div>
            <div style={{ display: "flex" }}>
                <LabeledInputSlider
                    style={{
                        flexGrow: 1
                    }}
                    id="X"
                    name="X Input"
                    min={1}
                    max={10}
                    defaultValue={props.steps[0]}
                    value={x_steps}
                    onInputChanged={setX}
                />
                <LabeledInputSlider
                    style={{
                        flexGrow: 1,
                    }}
                    id="Y"
                    name="Y Input"
                    min={1}
                    max={5}
                    defaultValue={props.steps[1]}
                    value={y_steps}
                    onInputChanged={setY}
                />
            </div>
            <Canvas>
                <ambientLight intensity={0.3} />
                <pointLight position={[0, 5, 2]} intensity={2} />
                {GenBoxes([x_steps, y_steps], props.start, props.stop)}
            </Canvas>
        </div>
    )
}

const TestThreeABox = (props) => (
    <Canvas>
        <pointLight position={[0, -5, 10]} />
        <TestThreeBox position={props.boxPos} />
    </Canvas>
)

export { TestThreeBoxes, TestThreeABox }
