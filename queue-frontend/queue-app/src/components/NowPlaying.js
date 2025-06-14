// import libraries
import axios from 'axios';
import React, {useState, useEffect} from 'react';

// showing the song that is currently playing
function NowPlaying({sessID}) {
    const [track, setTrack] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:3000/session/${sessId}/next')
        .then(res => setTrack(res.data.nextTrack))
        .catch(err => console.error('Failed to fetch the next track', err));
    }, [sessID]);
  
    return track ? (<div>{track.title} by {track.artist}</div>) : <p>Loading...</p>;
  }