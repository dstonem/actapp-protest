import React, {useState} from "react"
import CauseIcon from "./CauseIcon"
import Action from "./Action"
import CommentFeed from "./CommentFeed"
import {commentData} from "../../CommentData"
import Comment from "./Comment"


function Post({postId,user,cause,action,points,postImg,postText,link}) {

    let [commentShow,setCommentShow] = useState(false)

    let showComments = () => {
        setCommentShow(!commentShow)
        console.log(commentShow)
        console.log(postId)
    }

    //for some reason comment.props.postId on line 19 is undefined/an empty array... 
    // so I set the ref to equal the postId because the filter was reading info outside of the props (like 'key' and 'ref')
    // but now the postId is a string and it throws a weird error where it's saying you can't have refs be strings
    let allComments = commentData.map((comment,idx) => <Comment key={idx} ref={comment.postId} postId={comment.postId} userName={comment.username} comment={comment.comment}/>)
    let filteredCommentsByPost = allComments.filter(comment => 
        comment.props.postId === postId
    )
    console.log(allComments)
    console.log(filteredCommentsByPost)

    return (
        <div className="main-feed">
            <div className="feed-post-container" id={`post_${postId}`}>
                <div className="feed-post-user-info-div">
                    <p className="user-who-posted">{user}</p>
                    <CauseIcon cause={cause} />
                </div>
                <div className="main-feed-img-container">
                    <div className="feed-action-item-div">
                        {action ? <Action action={action} points={points}/> : null}
                    </div>
                    <img src={postImg} alt={`post_${postId}`}/>
                    
                </div>
                <div className="feed-likes-div">
                    <img src="like_icon.jpg" alt="like icon"/>
                    <p className="num-likes">5</p>
                    
                </div>
                <div className="main-feed-comment-feed">
                    <div className="post-text">
                        <p><b>{user}</b></p>
                        <p>{postText}</p>
                    </div>
                    {commentShow ? null : <button className="post-button" onClick={showComments}>Show Comments</button>}
                    {commentShow ? <CommentFeed >{filteredCommentsByPost}</CommentFeed> : null}
                </div>
                <div className="feed-add-comment-div">
                    <form className="feed-comment-form">
                        <input className="feed-add-comment-box"></input>
                        <button className="post-button">Comment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post