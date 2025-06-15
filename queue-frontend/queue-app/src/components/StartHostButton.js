// import libraries
import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';

// button to start hosting
function StartHostButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    };

    return (
        <button className="Host-button" onClick={handleClick}>
            Start Hosting!
        </button>
    );
}

export default StartHostButton;