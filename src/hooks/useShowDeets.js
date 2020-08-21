import React, {useState} from "react"

const useShowDeets = () => {
    const [details,setDetails] = useState(false)

    const showEventDetails = () => {
        setDetails(true)
    }

    return(details)
}


export default useShowDeets