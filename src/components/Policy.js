import React, {useState} from "react"

function Policy({handleClick,title,description}) {

    const [policyShowing,setPolicyShowing] = useState(false)

    const showPolicy = () => {
        setPolicyShowing(!policyShowing)
    }

    return (
        <div>
            <p onClick={showPolicy}>{title}</p>
            {policyShowing ? <p>{description} </p> : null}
        </div>
    )
}

export default Policy