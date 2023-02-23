import React from 'react';
import photo from '../images/ccLivelogo.png';
import {Link} from "react-router-dom";

const LandingPageLogo = () => {
    return (
        <div className={["up-left","bouncy"].join(' ')}>
            <Link to={'/'}><img width={200} className={"up-left"} src={photo} alt="CCLiveLogo"/></Link>
        </div>
    );
};

export default LandingPageLogo;