import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"
import CauseIcon from "./CauseIcon"
import Action from "./Action"
import CommentFeed from "./CommentFeed"
import AddLike from "./AddLike"


function Post({postId,user,username,cause,action,points,postImg,postText,link}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/likes/${postId}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    console.log(data)
    
    if(!data) return <div>loading...</div>

    return (
        <div className="main-feed">
            <h3>Event Feed</h3>
            <div className="feed-post-container" id={`${postId}`}>
                <div className="feed-post-user-info-div">
                    <p className="user-who-posted">{username}</p>
                    <CauseIcon cause={cause} />
                </div>
                <div className="main-feed-img-container">
                    <div className="feed-action-item-div">
                        {action ? <Action action={action} points={points}/> : null}
                    </div>
                    <img src={postImg} alt={`post_${postId}`}/>
                    
                </div>
                <div className="feed-likes-div">
                    <AddLike user={user} postId={postId} numLikes={Number(data.count)} />
                    
                    
                </div>
                <div className="main-feed-comment-feed">
                    <div className="post-text">
                        <p><b>{user}</b></p>
                        <p>{postText}</p>
                    </div>
                    <CommentFeed postId={postId} />
                </div>
                
            </div>
        </div>
    )
}

export default Post