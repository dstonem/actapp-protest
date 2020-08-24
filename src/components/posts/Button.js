import React from "react"

let filterByUser = user => {
    console.log(user)
}

function Button({btnText}) {
    return(
        <button onClick={filterByUser}>{btnText}</button>
    )
}

export default Button