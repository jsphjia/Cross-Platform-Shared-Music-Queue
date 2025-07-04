// import libraries
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

// import components
import StartHostButton from './../components/StartHostButton.js';

// home page
function HomePage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className="App" onClick={handleClick}>
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
                        cursor={false}
                        repeat={0}
                    />
                </h1>
            </header>
        </div>
    );
}

export default HomePage;