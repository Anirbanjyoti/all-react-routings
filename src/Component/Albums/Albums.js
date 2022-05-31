import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const url = '';
        fetch(url)
        .then(res => res.json())
        .then(data => setAlbums(data));
    }, [])
    return (
        <div>
            <h1>Album number is :{albums.length} </h1>
           {
                albums.map
                ( album => <Album key={album.id} album={album}></Album>)
            } 
        </div>
    );
};

export default Albums;