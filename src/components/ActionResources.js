import React from "react"

function ActionResources({handleClick,data}) {

    console.log(data)

    return (
        <div className="action-resources">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <button onClick={handleClick}>Back</button>
        </div>
    )
}

export default ActionResources