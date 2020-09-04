import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"
import CauseIcon from "./CauseIcon"
import Action from "./Action"
import CommentFeed from "./CommentFeed"
import AddLike from "./AddLike"


function Post({postId,user,username,cause,action,points,postImg,postText,link,currentUserInfo}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/likes/${postId}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    console.log(data)
    
    if(!data) return <div>loading...</div>

    return (
        <div className="">
            <div className="feed-post-container" id={`${postId}`}>
                <div className="post-user-and-cause-div">
                    {cause === 'blm' ? <img src={'/images/icons/blm_icon.png'} width="35px" height="35px" /> : null}
                    {cause === 'climate' ? <img src={'/images/icons/environment_icon.png'} width="35px" height="35px" /> : null}
                    {cause === 'election' ? <img src={'/images/icons/election_icon.png'} width="35px" height="35px" /> : null}
                    <p className="user-who-posted"><b>{username}</b></p>
                </div>
                <div className="main-feed-img-container">
                    <div className="feed-action-item-div">
                        {action ? <Action action={action} points={points}/> : null}
                    </div>
                    <img src={postImg} alt={`post_${postId}`} className="post_img"/>
                </div>
                <div className="post-likes-container">
                    <AddLike user={user} postId={postId} alreadyLiked={data[0]} numLikes={Number(data[1].count)} />
                </div>
                <div className="post-text">
                    <p><b>{username}</b></p>
                    <p>{postText}</p>
                </div>
                <div className="main-feed-comment-feed">
                    
                    <CommentFeed postId={postId} currentUserInfo={currentUserInfo}/>
                </div>
                
            </div>
        </div>
    )
}

export default Post