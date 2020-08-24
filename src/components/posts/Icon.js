import React from "react"

const style = {
    "width" : "50px"
}

function Icon({src,alt,link}) {
    return(<a href={link}><img src={src} alt={alt} style={style}/></a>)
}

export default Icon