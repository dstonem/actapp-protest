import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'
import ActionResources from './ActionResources'

function Actions({action1,action2,action3}) {

    //should I pass the fetch using parameters? then I wouldn't have to fetch the whole actions api (which doesn't really make a difference, but maybe I could provide the action details on single pages for people to use as resources)...
    const [loading,error,data,fetchData,setUrl] = useFetch('/actions/resources')
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    console.log(data)

    const [whichAction,setWhichAction] = useState("")

    const [actionDetailsShowing,setActionDetailsShowing] = useState(false)

    const openActionDetails = (action) => {
        //dataFromFetch.filter(action => action.title === action.target.innerText)
        for(let i = 0; i < data.length; i++) {
            if(action.target.innerText === data[i].title) setWhichAction(data[i])
            console.log(action.target.innerText,whichAction,'action details')
        }
        setActionDetailsShowing(!actionDetailsShowing)
    }

    console.log(whichAction.id)
    
    return (
        <div>
            <h3>Follow-Up Actions (?)</h3>
            {actionDetailsShowing ? <ActionResources handleClick={openActionDetails} actionId={whichAction.id} /> : null}
            <p onClick={openActionDetails}>{action1}</p>
            <p onClick={openActionDetails}>{action2}</p>
            <p onClick={openActionDetails}>{action3}</p>
        </div>
    )
}

export default Actions