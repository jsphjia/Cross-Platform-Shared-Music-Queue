// import libraries
import React from 'react';
// import {useNavigate} from 'react-router-dom';

// login page
function LoginPage() {
    const clientId = import.meta.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = import.meta.env.REACT_APP_REDIRECT_URI;
    const scope = [
        'user-read-private',
        'user-read-email',
        'user-modify-playback-state'
    ].join(' ');
    const loginUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    
    const handleSpotifyLogin = () => {
        window.location.href = loginUrl;
    }

    return (
        <div className="App">
            <header>
                <title>CoQueue: Login</title>
            </header>
            <header className="App-header">
                <h1>Login Page</h1>
                <button onClick={handleSpotifyLogin}>Login with Spotify</button>
            </header>
        </div>
    );
}

export default LoginPage;