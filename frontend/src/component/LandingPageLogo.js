import React from 'react';
import photo from '../images/ccLivelogo.png';

const LandingPageLogo = () => {
    return (
        <div className={["up-left","bouncy"].join(' ')}>
            <img width={200} className={"up-left"} src={photo} alt="CCLiveLogo"/>
        </div>
    );
};

export default LandingPageLogo;