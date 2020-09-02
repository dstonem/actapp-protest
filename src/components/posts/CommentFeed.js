import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"
import Comment from "./Comment"
import AddComment from "./AddComment"

function CommentFeed({postId}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/comments/${postId}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    let [commentShow,setCommentShow] = useState(false)

    let showComments = () => {
        setCommentShow(!commentShow)
        console.log(commentShow)
        console.log(postId)
    }

    let [allComments,setAllComments] = useState()

    if(!data) return <div>loading...</div>

    if(commentShow) return <div>{data.map((comment,idx) => 
        <Comment key={idx} postId={comment.postId} userName={comment.username} comment={comment.comment}/>)}
        <div className="feed-add-comment-div">
            <AddComment allComments={data} postId={postId} />
        </div>
    </div>

    return(<div>{data.slice(0,2).map((comment,idx) => <Comment key={idx} postId={comment.postId} userName={comment.username} comment={comment.comment}/>)}<h4 onClick={showComments}>Show Comments</h4>
        <div className="feed-add-comment-div">
            <AddComment allComments={data} postId={postId} />
        </div>
    </div>)
}

export default CommentFeed