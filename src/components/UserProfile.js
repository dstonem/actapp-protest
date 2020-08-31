import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'
import UserInfo from './UserInfo'
import UsersEventsList from './UsersEventsList'
import EventDetails from './EventDetails'

const UserProfile = ({user}) => {

    const [loading,error,data,fetchData,setUrl] = useFetch('/usersEvents')
  
    useEffect(()=>{
        if(!data && user){
            console.log('trying to get userProfile')
            fetchData()
        }
    },[user])

    console.log(data,'userprofile')
    
    if(!data) return <div>loading...</div>

    return (
        <div className="user-profile">
            <UserInfo user={user} />
            <h2>My Events</h2>
            <UsersEventsList>
                {data.map(event=> <div className="profile-event-pic-container"><a href={event.event_url}><img className="profile-event-pic" src={event.pic} /></a></div>)}
            </UsersEventsList>
        </div>
    )
}

export default UserProfile