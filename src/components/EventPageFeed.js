import React,{useState} from "react"

function EventPageFeed({children}) {

    const [feedShowing,setFeedShowing] = useState(false)

    const showFeed = () => {
        setFeedShowing(!feedShowing)
    }

    //Select all posts associated with the event id (if the users id is in the attendees/events table(s) for an event, allow them to associate a post with the event, which gets posted to this component on the event (details?) page or an archived actual url for archived events) - if they are attending or have attended an event, a dropdown on the upload page allows them to tag their post with a certain event --- gotta connect to the instagram api, too, so they can create a post here and have it upload to insta as well
    return (
        <div>
            {feedShowing ? null : <button onClick={showFeed}>Show Event Feed</button>}
            {feedShowing ? <div>{children}</div> : null}
        </div>
    )
}

export default EventPageFeed