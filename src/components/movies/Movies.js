import React, {useEffect, useState} from "react";
import axios from "axios";
import {Movie} from "./Movie";

export const Movies = () => {
    
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect( () => {
        setLoading(true);
        
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then( (response) => {
                setLoading(false)
                setPhotos(response.data)
                }
            )
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }, [])
    console.log(photos)
    console.log('navigator.onLine', navigator.onLine);
    return (
        <div className="flex flex-wrap -mb-4">
            {
                !loading && photos?.length 
                    ? photos?.map((photo, index) => <Movie key={photo.id ?? index} photo={photo}/>) 
                    : <h1>Loading</h1>   
            }
        </div>
    )
}