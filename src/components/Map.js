import React from "react"
import {Map, GoogleApiWrapper} from "google-maps-react"

function GMap({google,address,styles,lat,lng}) {
    //NEXT STEPS: add location pin
    let center = {lat, lng}
    return (
        <div>
            <Map 
                google={google}
                zoom={10}
                initialCenter={center}
                style={styles}
            />
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA-FD7UmxJXC2NjReClIbSv-BFjfELmqN4')
   })(GMap);