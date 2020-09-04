import React, { useState, useEffect, useRef } from "react"
import useFetch from '../hooks/useFetch'
import { Link } from "react-router-dom";
import ProfilePic from "./ProfilePic";

const UserInfo = () => {

    const [loading, error, data, fetchData, setUrl] = useFetch('/user')
    const imageUploader = useRef()

    useEffect(() => {
        if (!data) {
            fetchData()
        }
    }, [])

    const [submitted, setSubmitted] = useState(false)

    const handleClick = () => {
        setSubmitted(!submitted)
    }

    if (!data) return <div>loading...</div>
    console.log(data)

    return (
        <div className="profile-page-container">
            {submitted ?
                <ProfilePic username={data.username} /> :
                null
            }
            <div className="profile-user-info-container">
                {data.profilepic ?
                    <div style={{ 'background-image': `url(${data.profilepic})` }} className="profile-pic-container" onClick={handleClick} />
                    :
                    <h5 onClick={handleClick}>Upload Profile Picture</h5>
                }
                <div className="profile-username-and-points-container">
                    <h5>{data.username}</h5>
                    <div className="profile-points-container">
                        <h5 id="points" className="bold">{data.points} 25</h5>
                        <img className="actcoin-logo" src="/images/icons/actcoin_logo.png" alt="actpoints logo"/>
                    </div>
                </div>
            </div>
            <Link to="/Survey"><button>{data.firstTimeUser ? "Set Your Causes" : "Update Causes"} </button></Link>
        </div>
    )
}

export default UserInfo