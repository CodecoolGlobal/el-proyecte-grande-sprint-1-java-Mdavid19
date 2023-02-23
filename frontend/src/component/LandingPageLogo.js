import React from 'react';
import photo from '../images/ccLivelogo.png';
import {Link} from "react-router-dom";

const LandingPageLogo = () => {
    return (
        <div className={["up-left", "bouncy", "logo"].join(' ')}>
            <Link to={'/'}>
                <img className={["up-left", "logo"].join(" ")} src={photo} alt="CCLiveLogo"/>
            </Link>
        </div>
    );
};

export default LandingPageLogo;