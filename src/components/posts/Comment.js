import React from "react"

function Comment({userName,comment}) {
    const style = {
        fontWeight:"700",
        margin:"10px"
    }

    const divStyle = {
        display:"flex"
    }

    return(
        <div style={divStyle}>
            <p style={style}>{userName}</p>
            <p>{comment}</p>
        </div>
    )
}

export default Comment