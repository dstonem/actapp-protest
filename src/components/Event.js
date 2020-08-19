import React from "react"
import GMap from "./Map"

function Event({title,img,description,starttime,endtime,date,center,address,lat,lng}) {
    const style = {
        backgroundImage:"url("+img+"),linear-gradient(to bottom, #eee, #ABAEB3)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"50%",
        // backgroundZoom:"200%"
    }

    const mapStyles = {
        width:"150px",
        height:"150px",
        position:"absolute",
        borderRadius:"50%",
        left:"25px",
        top:"-150px"
    }
    console.log(lat)
    return (
        
        <div className="event-card" style={style}>
            
            <div className="event-card-title-container">
                <h2>{title}</h2>
                <p>{description}</p>
                <button>Learn More & Attend</button>
            </div>
            <div className="event-info-container">
                <div className="event-info-text-container">
                    <p>{address}</p>
                    <p>{starttime} - {endtime}</p>
                    <p>{date}</p>
                </div>
                <GMap 
                    initialCenter={center}
                    styles={mapStyles}
                    lat={lat}
                    lng={lng}
                />
            </div>
        </div>
    )
}

export default Event