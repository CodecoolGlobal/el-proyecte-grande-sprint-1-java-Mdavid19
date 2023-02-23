import React from 'react';

const LandingPageWelcome = () => {
    return (
        <div className={"center"}>
            <h1 className={['center', 'welcome', 'animate-character'].join(" ")}> Welcome to CC Live Messenger!</h1>
            <p className={['center', 'welcome-p'].join(" ")}>If you liked old good MSN messenger you will like this too.</p>
        </div>
    );
};

export default LandingPageWelcome;