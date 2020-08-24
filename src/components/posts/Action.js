import React from "react"

function Action({action,points}) {
    return(<button>{action}<span className="points">+{points}</span></button>)
}

export default Action