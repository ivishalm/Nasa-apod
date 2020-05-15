import React from 'react'

import { useState, useEffect } from 'react'

import Navbar from './Navbar'

const api_key = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}`;

const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {

        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(api_key);
            const data = await res.json();
            setPhotoData(data);

        }
    }, [])

    if (!photoData) return <div />;

    return (
        <>
            <Navbar />
            <div className="container image-main">
                <div className="nasa-image">
                    {photoData.media_type === 'image' ? (
                        <img src={photoData.url} alt={photoData.title} />
                    ) : (
                            <iframe src={photoData.url} frameBorder='0'
                                title="space video"
                                gesture="media"
                                allow="encrypted-media"
                                allowFullScreen
                                className="photo"></iframe>
                        )}

                </div>
                <div className="content">
                    <div className="title">{photoData.title}</div>
                    <div className="date">{photoData.date}</div>
                    <div className="explanation">{photoData.explanation}</div>
                </div>
            </div>

        </>
    );
}

export default NasaPhoto;