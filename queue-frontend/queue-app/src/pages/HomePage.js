// import libraries
import React from 'react';

// import components
import StartHostButton from './../components/StartHostButton.js';

// home page
function HomePage() {
    return (
        <div className="App">
            <header>
                <title>CoQueue: Home</title>
            </header>
            <header className="App-header">
                <h1>CoQueue: A Cross-Platform Shared Music Queue</h1>
                <StartHostButton/>
            </header>
        </div>
    );
}

export default HomePage;