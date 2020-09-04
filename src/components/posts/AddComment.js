import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"
import Comment from "./Comment"
import {
    Link
  } from "react-router-dom";

function AddComment({allComments,postId,currentUserInfo}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/addComment/${postId}`,'POST')

    let currentComment

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(JSON.stringify({comment:e.target.firstChild.value}))
        currentComment = {username:currentUserInfo.username,comment:e.target.firstChild.value}
        setComments([...allComments,currentComment])
    }

    let [commentShow,setCommentShow] = useState(false)

    let showComments = () => {
        setCommentShow(!commentShow)
        console.log(commentShow)
        console.log(postId)
    }

    const [comments,setComments] = useState(allComments)

    console.log(allComments,data)

    if(commentShow) return <div>{comments.map((comment,idx) => <Comment key={idx} postId={comment.postId} userName={comment.username} comment={comment.comment}/>)}<h4 onClick={showComments}></h4>
            <div className="feed-add-comment-div">
            <form className="feed-comment-form" onSubmit={handleSubmit}>
                <input className="add-comment-box" placeholder="Add Comment"></input>
                {currentUserInfo ? <p className="login-to-comment">Post</p>: <Link to="/LoginForm"><b className="login-to-comment">Login to Comment</b></Link>}
            </form>
        </div>
    </div>

    //put this back in when it's ready: .slice(0,2)
    return (
        <div>
            <div>{comments.slice(0,2).map((comment,idx) => <Comment key={idx} postId={comment.postId} userName={comment.username} comment={comment.comment}/>)}<h4 onClick={showComments}>...</h4>{currentComment !== null && comments.length > 1 ? <Comment userName={comments[comments.length-1].username} comment={comments[comments.length-1].comment} /> : null}
            <div className="feed-add-comment-div">
                <form className="feed-comment-form" onSubmit={handleSubmit}>
                    <input className="add-comment-box" placeholder="Add Comment"></input>
                    {currentUserInfo ? <p className="login-to-comment">Post</p>: <Link to="/LoginForm"><b className="login-to-comment">Login to Comment</b></Link>}
                </form>
            </div>
        </div>
            
        </div>
    )
}

export default AddComment