import React, { useState } from "react";
import axios from "axios"

export default function App({event_id}) {

    const [image, setImage] = useState({ preview: "", raw: "" });
    const [formData,setFormData] = useState({})

    const handleImageChange = e => {
        if (e.target.files.length) {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        });
        }
        
    };

    const handleChange = (event) => {
        event.preventDefault()
        const { name, value, type, checked } = event.target
        setFormData(formData => ({...formData, [name]: value}));
        console.log(formData.postText)
    }

    const handleUpload = async e => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append("image", image.raw);
        uploadData.append("postText", formData.postText);
        
        // axios.post(`/addPost/${event_id}`, uploadData, {
        //     url:'/images',
        //     data:uploadData
        // })
        // .then(res => {
        //     console.log(res.statusText)
        // })

        //how do we use the FileReader here to make sure the images go in the public folder (React)?
        console.log(uploadData)

        await fetch(`/addPost/${event_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({picurl:`/images/${image.raw.lastModified}_${image.raw.name}`,body:formData.postText})
        });
    };

    return (
        <div>
            <form onChange={handleChange}>
        <label htmlFor="upload-button">
            {image.preview ? (
            <img src={image.preview} alt="dummy" width="100%" height="100%" />
            ) : (
            <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                <img src='/images/icons/image-icon-2.jpg' width='50px' />
                <h5 className="text-center">Upload your photo</h5>
            </>
            )}
        </label>
        <input
            type="file"
            id="upload-button"
            style={{ display: "none" }}
            onChange={handleImageChange}
        />
        <input name="postText"></input>
        <br />
        <button onClick={handleUpload}>Post</button>

        </form>
        </div>
        
    );
}