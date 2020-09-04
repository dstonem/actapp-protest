import React,{useEffect,useState} from "react"
import useFetch from "../../hooks/useFetch"
import { Redirect } from "react-router-dom";

function AddLike({user,postId,numLikes,alreadyLiked}) {

    const [loading,error,data,fetchData,setUrl] = useFetch(`/addLike/${postId}`,'POST')
    const [needsToLogin,setNeedsToLogin] = useState(false)

    const handleClick = async (e) => {
        if(user){
            await fetchData()
            if(!alreadyLiked){
                setLikes(numLikes+1)
            }
            console.log(data)
        } else {
            setNeedsToLogin(true)
        }
    }

    const [likes,setLikes] = useState(Number(numLikes))

    return (
        <div className="post-likes-container">
            {needsToLogin ? <Redirect to='/LoginForm'><button>Login</button></Redirect> :<img src="/images/icons/like_icon5.jpg" className="like-icon" alt="like icon" width="15px" height="15px" onClick={handleClick}/>} 
            <p className="num-likes">{likes}</p>  
        </div>
    )
}

export default AddLike