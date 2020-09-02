import React from "react"

function CauseIcon({cause}) {

    let getCause = () => {
        if(cause === 'blm'){return "/images/icons/blm_icon.png"}
        if(cause === 'climate'){return "/images/icons/environment_icon.png"}
        if(cause === 'election'){return "/images/icons/election_icon.png"}
    }
    let filterByCause = () => {
        console.log(cause)
    }

    return(
        <img className="cause-icons" onClick={filterByCause} src={getCause()} alt="cause icon" width="50px" />
    )
}

export default CauseIcon