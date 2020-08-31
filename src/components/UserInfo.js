import React,{useState,useEffect} from "react"
import useFetch from '../hooks/useFetch'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

const UserInfo = (user) => {

    const [loading,error,data,fetchData,setUrl] = useFetch('/user')
  
    useEffect(()=>{
        if(!data){
        fetchData()
        }
    },[])

    if(!data) return <div>loading...</div>
    console.log(data)
    return (
        <HashRouter>
        <div>
            <img src={data.profilePic} />
            <p>{data.username}</p>
            <p>{data.points}</p>
            <NavLink to="/Survey"><button>{data.firstTimeUser ? "Set Your Causes" : "Update Causes"} </button></NavLink>
        </div>
        </HashRouter>
    )
}

export default UserInfo