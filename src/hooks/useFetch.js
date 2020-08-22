//DONT MESS WITH THIS IT WORKS PROPERLY NOW
import { useState } from "react";

const useFetch = (_url) => {

    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [url, setUrl] = useState(_url);

    const fetchData =()=> {
        try {
            setLoading(true);
            fetch(url)
            .then(response=>{
                if(response.status === 200){
                   return response.json()
                } else {
                    setError(response.status)
                }
            })
            .then(r=>{
                console.log(r)
                setData(r)
                setLoading(false);
            })
        } catch (error) {
            setError(error);
           //throw error;
        }
    };


    return [ loading,error, data, fetchData, setUrl ];

};

export default useFetch;