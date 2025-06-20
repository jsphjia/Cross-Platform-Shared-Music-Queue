// import libraries
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

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
                <h1>
                    <TypeAnimation
                        sequence={[
                        'CoQueue: A Cross-Platform Shared Music Queue',
                        1000, // pause after typing
                        ]}
                        wrapper="span"
                        speed={50}
                        cursor={true}
                        repeat={0}
                    />
                </h1>
                <StartHostButton/>
            </header>
        </div>
    );
}

export default HomePage;