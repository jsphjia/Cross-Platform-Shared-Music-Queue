// import libraries
import React from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';

function SpotifyLoginButton() {
    const clientId = import.meta.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = import.meta.env.REACT_APP_REDIRECT_URI;
    const scopes = 'user-read-private user-read-email';

    const navigate = useNavigate();
    const login = () => {
        const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location.href = authUrl;
    };

    return (
        <button className="Host-button" onClick={login}>
            Login with Spotify!
        </button>
    )
}

export default SpotifyLoginButton;