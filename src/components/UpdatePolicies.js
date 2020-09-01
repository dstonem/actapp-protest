import React, {useEffect,useState} from "react"
import useFetch from "../hooks/useFetch"

function UpdatePolicies({finalizedPolicies}) {

    const [loading,error,data,fetchData] = useFetch('/policies/update','POST')

    const updatePols = () => {
        console.log(finalizedPolicies)
        if(finalizedPolicies) fetchData(JSON.stringify())
    }

    return (
        <button onClick={updatePols}>Update Policies</button>
    )
}

export default UpdatePolicies