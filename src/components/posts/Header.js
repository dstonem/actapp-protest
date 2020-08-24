import React from "react"

function Header({heading,children}) {
    return(
        <header>
            {heading}
            <div>{children}</div>
        </header>
    )
}

export default Header