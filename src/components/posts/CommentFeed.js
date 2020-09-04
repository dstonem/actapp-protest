import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"
import AddComment from "./AddComment"

function CommentFeed({postId,currentUserInfo}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/comments/${postId}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    
    // let [allComments,setAllComments] = useState()

    if(!data) return <div>loading...</div>

    return(
            <AddComment allComments={data} postId={postId} currentUserInfo={currentUserInfo} />
        )
}

export default CommentFeed