import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"

function AddComment({allComments,postId}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/addComment/${postId}`,'POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.firstChild.value)
        fetchData(JSON.stringify({comment:e.target.firstChild.value}))
    }

    const [comments,setComments] = useState(allComments)

    //NEXT STEPS: merge this and the commentFeed, pass the data from commentfeed to here (here is where the commentFeed should display now...) and store the passed data in state, rendering the state below instead of the pure data like is happening in commentFeed (that way when the data changes the state changes?)
    return (
        <form className="feed-comment-form" onSubmit={handleSubmit}>
            <input className="feed-add-comment-box"></input>
            <button className="post-button">Comment</button>
        </form>
    )
}

export default AddComment