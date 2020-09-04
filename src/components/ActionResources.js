import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'

function ActionResources({handleClick,actionId,userInfo}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/actions/resources/${actionId}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    console.log(actionId,data)

    const [actionSelected,setActionSelected] = useState("")

    const handleChange = (e) => {
        setActionSelected(e.target.value)
    }

    if(!data) return <div>loading...</div>

    //XXXXXXXXXXXXXXXXXXX get user's state and city
    let city = userInfo.city
    let state = userInfo.state

    return (
        <div className="action-resources">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <select id="dropdown" name="names" className="input-1" onChange={handleChange}>
                <option value={`${data.name1}`}>{data.name1}</option>
                <option value={`${data.name2}`}>{data.name2}</option>
                <option value={`${data.name3}`}>{data.name3}</option>
                <option value={`${data.name4}`}>{data.name4}</option>
                <option value={`${data.name5}`}>{data.name5}</option>
            </select>
            {actionSelected === data.name2 ? 
            <div className="action-resources-org-info-container">
                <a href={`https://www.yelp.com/search?find_desc=Black+Owned+Businesses&find_loc=${city}%2C+${state}&ns=1`}><img src={`${data.pic2}`} width='100px' /></a>
                <h2>{data.name2}</h2>
                <p>{data.description2}</p>
            </div> 
            : null}
            {actionSelected === data.name3 ? 
            <div className="action-resources-org-info-container">
                <a href={`${data.url3}`}><img src={`${data.pic3}`} width='100px' /></a>
                <h2>{data.name3}</h2>
                <p>{data.description3}</p>
            </div> 
            : null}
            {actionSelected === data.name4 ? 
            <div className="action-resources-org-info-container">
                <a href={`${data.url4}`}><img src={`${data.pic4}`} width='100px' /></a>
                <h2>{data.name4}</h2>
                <p>{data.description4}</p>
            </div> 
            : null}
            {actionSelected === data.name5 ? 
            <div className="action-resources-org-info-container">
                <a href={`${data.url5}`}><img src={`${data.pic5}`} width='100px' /></a>
                <h2>{data.name5}</h2>
                <p>{data.description5}</p>
            </div> 
            : null}
            <button onClick={handleClick}>Back</button>
            <a href={`${data.reading}`}><p>Reading</p></a>
        </div>
    )
}

export default ActionResources