import React from "react"

function Comment({userName,comment}) {

    return(
        <div className="post-comment-container">
            <p><b>{userName}</b></p>
            <p>{comment}</p>
        </div>
    )
}

export default Comment