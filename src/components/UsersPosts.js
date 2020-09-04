import React, { useState, useEffect } from "react"
import useFetch from '../hooks/useFetch'
import Post from './posts/Post'

const UsersPosts = ({user,userInfo}) => {

    const [loading, error, data, fetchData, setUrl] = useFetch('/usersPosts')

    useEffect(() => {
        if (!data) {
            fetchData()
        }
    }, [])

    if (!data) return <div>loading...</div>

    return (
        <div>
            {data.map((post, idx) => <Post key={idx} postId={post.id} user={user} currentUserInfo={userInfo} username={post.username} postImg={post.picurl} postText={post.body} cause={post.causes} action={post.action} />).sort((a,b) => b.key - a.key)}
        </div>
    )
}

export default UsersPosts