import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"
import {
    Link
  } from "react-router-dom";

function AddLike({user,postId,numLikes}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/addLike/${postId}`,'POST')

    const [needsToLogin,setNeedsToLogin] = useState(false)

    const handleClick = (e) => {
        console.log(user)
        if(user){
            fetchData()
            setLikes(numLikes+1)
        } else {
            setNeedsToLogin(true)
        }
    }

    const [likes,setLikes] = useState(Number(numLikes))

    return (
        <div>
            {needsToLogin ? <Link to='/LoginForm'><button>Login</button></Link> :<img src="/images/icons/like_icon.jpg" alt="like icon" width="15px" onClick={handleClick}/>} 
            <p className="num-likes">{likes}</p>  
        </div>
    )
}

export default AddLike