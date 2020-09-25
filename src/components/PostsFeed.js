import React, { useState, useEffect } from "react"
import useFetch from '../hooks/useFetch'
import Post from './posts/Post'
import Upload from './posts/Upload'

const PostsFeed = ({user,userInfo}) => {

    const [loading, error, data, fetchData, setUrl] = useFetch('/posts')

    useEffect(() => {
        if (!data) {
            fetchData()
        }
    }, [])

    const filterByCause = (item) => {
        if(!userInfo.cause_one && !userInfo.cause_two && !userInfo.cause_three) {
            return true
        }
        if(item.causes === userInfo.cause_one || item.causes === userInfo.cause_two || item.causes === userInfo.cause_three){
            return true
        }
    }
    console.log(data)
    if (!data) return <div>loading...</div>

    return (
        <div className="post-feed">
            {user ? data.map((post, idx) => <Post key={idx} postId={post.id} user={user} currentUserInfo={userInfo} username={post.username} postImg={post.picurl} postText={post.body} cause={post.causes} action={post.action} />).sort((a,b) => b.key - a.key) :data.map((post, idx) => <Post key={idx} postId={post.id} user={user} currentUserInfo={userInfo} username={post.username} postImg={post.picurl} postText={post.body} cause={post.causes} action={post.action} />).sort((a,b) => b.key - a.key)}
        </div>
    )
}

export default PostsFeed