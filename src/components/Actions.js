import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'
import ActionResources from './ActionResources'

function Actions({action1,action2,action3,userInfo}) {

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
        <div className="actions-container">
            <h3 id="followup-actions-header">Follow-Up Actions (?)</h3>
            {actionDetailsShowing ? <ActionResources handleClick={openActionDetails} actionId={whichAction.id} userInfo={userInfo}/> : null}
            <div className="followup-action-list-item">
                <img src="/images/icons/actcoin_logo.png" alt="actpoints logo"/>
                <button onClick={openActionDetails}>{action1}</button>
            </div>
            <div className="followup-action-list-item">
                <img src="/images/icons/actcoin_logo.png" alt="actpoints logo"/>
                <button onClick={openActionDetails}>{action2}</button>
            </div>
            <div className="followup-action-list-item">
                <img src="/images/icons/actcoin_logo.png" alt="actpoints logo"/>
                <button onClick={openActionDetails}>{action3}</button>
            </div>
        </div>
    )
}

export default Actions