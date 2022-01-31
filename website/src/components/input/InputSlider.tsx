import React, { useRef } from "react"

export const LabeledInputSlider = (props: {
    id
    name
    min
    max
    defaultValue
    value
    onInputChanged
    style?
}) => {
    const inp_ref = useRef<HTMLInputElement>()
    let inpChange = (e) => {
        props.onInputChanged(inp_ref.current.value)
    }

    return (
        <div
            style={{
                display: "flex",
                flexFlow: "column",
                margin: "0.5em",
                ...props.style,
            }}
        >
            <label htmlFor={props.id}>
                {props.name} - Current Value: {props.value}
            </label>
            <input
                ref={inp_ref}
                style={{ flexGrow: "1" }}
                id={props.id}
                type="range"
                min={props.min}
                max={props.max}
                defaultValue={props.defaultValue}
                onChange={inpChange}
            ></input>
        </div>
    )
}
