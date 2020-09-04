import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { Redirect } from "react-router-dom";


const Upload = ({user,event_id}) => {

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

    if(!event_id){
        event_id = 1
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',file)
        formData.append('postText',postText)
        console.log('clicked')
        try {
            const res = await axios.post(`/upload/${event_id}`, formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            })
            //pull fileName and filePath from res.data
            const {fileName,filePath} = res.data
            setUploadedFile({ fileName, filePath })
            setSubmitted(true)
        } catch(err) {
            if(err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }

    return (
        <Fragment>
            <div className="upload-container">

            </div>
            {uploadedFile.filePath ? <div><img src={uploadedFile.filePath} width="100%" alt="Uploaded Image"/></div> : 
            <form onSubmit={handleSubmit} className="upload-form">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={handleChange} />
                        <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
                </div>
                <input className="add-comment-box" type="text" name="postText" onChange={handleTextChange} placeholder="Add text to your post"></input>
                <input type="submit" value="Post" />
            </form>
            }
            {submitted ? <Redirect to="/PostsFeed" /> : null}
        </Fragment>
    )
}

export default Upload