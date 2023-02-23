


import React from 'react';
import photo from '../images/ccLivelogo.png';

const LandingPageLogo = () => {
    return (
        <div className={["up-left","bouncy", "logo"].join(' ')}>
            <img className={["up-left","logo"].join(" ")} src={photo} alt="CCLiveLogo"/>
        </div>
    );
};

export default LandingPageLogo;