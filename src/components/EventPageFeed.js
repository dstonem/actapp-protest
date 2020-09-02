import React,{useEffect,useState} from "react"
import useFetch from "../hooks/useFetch"
import Post from './posts/Post'
import CreatePost from "./posts/CreatePost"

function EventPageFeed({user,event_id}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/posts/${event_id}`)
  
    useEffect(()=>{
        if(!data){
            fetchData()
        }
    },[])

    const [feedShowing,setFeedShowing] = useState(false)

    const showFeed = () => {
        setFeedShowing(!feedShowing)
        console.log(data)
    }
    if(!data) return <div>loading...</div>
    //Select all posts associated with the event id (if the users id is in the attendees/events table(s) for an event, allow them to associate a post with the event, which gets posted to this component on the event (details?) page or an archived actual url for archived events) - if they are attending or have attended an event, a dropdown on the upload page allows them to tag their post with a certain event --- gotta connect to the instagram api, too, so they can create a post here and have it upload to insta as well
    return (
        <div>
            {feedShowing ? null : <button onClick={showFeed}>Show Event Feed</button>}
            {/* except this would be mapping the return of the select * from posts where event_id = __ (need to include the post_id somewhere in this component, then change the props of Post) */}
            {feedShowing ? <div>{data.map((post,idx) => <Post key={idx} postId={post.id} user={user} username={post.userName} postImg={post.picurl} postText={post.body} cause={post.causes} action={post.action} />)}<CreatePost event_id={event_id}/></div> : null}
        </div>
    )
}

export default EventPageFeed