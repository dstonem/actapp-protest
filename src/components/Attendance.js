import React, {useEffect,useState} from "react"
import useFetch from '../hooks/useFetch'

function Attendance({id}) {
    //need to pull attendee count and display it AND send a fetch to the addattendee "app.post" method
    //so consider putting the attend button in its own component to run the query that adds a row to attendees table in schema
    const [loading,error,data,fetchData,setUrl] = useFetch(`/attendees/${id}`)
  
    const [isLoaded,setIsLoaded] = useState(false)

    useEffect(()=>{
        if(!data){
            fetchData()
            console.log(id,data)
            loaded()
        }
    },[])

    const loaded = () => {
        setIsLoaded(true)
    }
    
    const [attendance,setAttendance] = useState(0)//change the zero to whatever the count(*) of this event is in the DB
    console.log(id,data)
    
    useEffect(()=>{
        setAttendance(data)
    },[data])

    if(!data) return <div>loading...</div>

    return (
        <h4>Attendance: {data.count >= 50 ? data.count : "<50"}</h4>
    )
}

export default Attendance