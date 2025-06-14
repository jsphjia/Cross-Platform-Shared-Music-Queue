import React from 'react';
import Axios from 'axios';
import '../App.css'

function StartHostButton({sessID}) {
    const handleClick = async() => {
        console.log('button clicked')
    };

    return (
        <button className="Host-button" onClick={handleClick}>
            Start Hosting!
        </button>
    );
}

export default StartHostButton