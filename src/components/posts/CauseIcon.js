import React from "react"

function CauseIcon({cause}) {

    let getCause = () => {
        if(cause === 'blm'){return "blm_icon.png"}
        if(cause === 'climate'){return "environment_icon.png"}
        if(cause === 'election'){return "election_icon.png"}
    }
    let filterByCause = () => {
        console.log(cause)
    }

    return(
        <img className="cause-icons" onClick={filterByCause} src={getCause()} alt="cause icon"/>
    )
}

export default CauseIcon