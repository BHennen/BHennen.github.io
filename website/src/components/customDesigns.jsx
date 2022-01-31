import React from "react"

export const myPre = (props) => {
    let lang = props.className.substring("language-".length).toUpperCase()

    return (
        <pre {...props}>
            <div className="language">{lang}</div>
            <hr />
            {props.children}
        </pre>
    )
}

export const myCode = (props) => {
    // Empty code block
    if (!props.children) {
        return <code {...props} />
    }
    
    let lines = [[]]
    let lineNum = 0

    // Extracts the lines from a given jsx element and wraps them in
    // spans with a line class
    let extractNewlines = (obj) => {
        // raw string
        if (typeof obj === "string") {
            let splitLines = obj.split("\n")
            splitLines.forEach((line, idx) => {
                if (idx > 0) {
                    lines.push([])
                    lineNum++
                }
                lines[lineNum].push(line)
            })
            // JSX element that just has a string
        } else if (typeof obj.props?.children === "string") {
            if (obj.props.children.search("\n") >= 0) {
                extractNewlines(obj.props.children)
            } else {
                lines[lineNum].push(obj)
            }
            // obj is array or JSX element with multiple children
        } else {
            // if obj is iterable use it, otherwise use obj children
            let iter = obj.forEach ? obj : obj.props.children
            iter.forEach((child) => {
                extractNewlines(child)
            })
        }
    }

    extractNewlines(props.children)

    lines.forEach((line, idx) => {
        lines[idx] = (
            <span className="line" key={idx}>
                {line}
                <br />
            </span>
        )
    })

    return <code {...props}>{lines}</code>
}
