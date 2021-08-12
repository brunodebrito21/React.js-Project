import React from "react"

const Button = ({children,event})=>{
    return(
        <button className="button" onClick={event} >{children}</button>
    )
}

export default Button;