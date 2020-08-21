import React from "react"
import {Map, GoogleApiWrapper} from "google-maps-react"
import {address} from "./EventCreator"

function GMap({google,address,styles,lat,lng}) {

    const fetchAutoComplete = (mapProps,map) => {
        //I NEED TO CHANGE THIS ID to lifting the state up or having a context or redux
        const autocomplete = new google.maps.places.Autocomplete(document.getElementById("pac-input"));
    }

    //NEXT STEPS: add location pin
    let center = {lat, lng}

    //NEXT STEP: consider context API or redux
    return (
        <div>
            
            <Map 
                google={google}
                zoom={10}
                initialCenter={center}
                style={styles}
                onReady={fetchAutoComplete}
            />
            
            
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-FD7UmxJXC2NjReClIbSv-BFjfELmqN4')
   })(GMap);