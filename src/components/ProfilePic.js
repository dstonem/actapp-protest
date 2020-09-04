import React, { useState, useEffect, useRef } from "react"
import axios from 'axios'
import { Redirect } from "react-router-dom";

const ProfilePic = ({username}) => {

    const [file,setFile] = useState('')
    const [fileName,setFileName] = useState('Choose File')
    const [uploadedFile,setUploadedFile] = useState({})
    const [postText,setPostText] = useState("")
    const [submitted,setSubmitted] = useState(false)

    const handleChange = e => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    
    const handleTextChange = e => {
        setPostText(e.target.value)
        console.log(postText)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',file)
        formData.append('postText',postText)
        console.log('clicked')
        try {
            const res = await axios.post(`/user/profilePic/${username}`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            })
            //pull fileName and filePath from res.data
            const {fileName,filePath} = res.data
            setUploadedFile({ fileName, filePath })
        } catch(err) {
            if(err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
        setSubmitted(!submitted)
    }

    return (
        <>
            {submitted ? <Redirect to='/EventFeed'/> :
            <>
            {uploadedFile.filePath ? <div><img src={uploadedFile.filePath} width="100%" alt="Uploaded Image"/></div> : 
            <form onSubmit={handleSubmit}>
                <div className="custom-file">
                    <input 
                        type="file" 
                        className="custom-file-input" 
                        id="customFile" 
                        onChange={handleChange} 
                    />
                        <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
                </div>
                <input type="submit" value="Upload" />
            </form>
            }
            </>
        }
        </>
    )
}

export default ProfilePic