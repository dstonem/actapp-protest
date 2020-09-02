import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'
import UserInfo from './UserInfo'
import UsersEventsList from './UsersEventsList'
import EventDetails from './EventDetails'
import {
    Route,
    Link,
    HashRouter,
    Redirect
  } from "react-router-dom";

const UserProfile = ({user}) => {

    const [loading,error,data,fetchData,setUrl] = useFetch('/usersEvents')
  
    useEffect(()=>{
        if(!data && user){
            fetchData()
        }
    },[])

    // const [event_id,setEvent_id] = useState(0)

    // const handleClick = (evt) => {
    //     console.log(evt.target.id)
    //     console.log(data)
    //     console.log(data[evt.target.id-1].id)
    //     setEvent_id(data[evt.target.id-1].id)
    //     console.log(event_id)
    //     renderRedirect()
    // }

    // const renderRedirect = () => {
    //     console.log('event id:',event_id,'data[event_id].pic',data[event_id].pic)
    //       return (
    //         <Redirect 
    //           to={`/events/${event_id}`}
    //         />
    //       );
    // };
    console.log(data,'userprofile')
    
    if(!data) return <div>loading...</div>

    return (
        <HashRouter>
        <div className="user-profile">
            <UserInfo user={user} />
            <h2>My Events</h2>
            <UsersEventsList>
                {data.map(event=> <div className="profile-event-pic-container"><Link to={`/events/${event.id}`}><img className="profile-event-pic" id={event.id} src={event.pic} /></Link></div>)}
            </UsersEventsList>
        </div>
        </HashRouter>
    )
}

export default UserProfile