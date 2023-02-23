import React from 'react';
import {Link} from "react-router-dom";


const LandingPageButtons = () => {

    const style = {
        animationDelay: '0.07s'
    }

    return (
        <div className={'center'}>
            <Link to='/login'><button className={['center', 'landing-butt', 'bouncy'].join(" ")}>Login</button></Link>
            <Link to='/registration'><button className={['center', 'landing-butt', 'bouncy'].join(" ")} style={style}>Register</button></Link>
        </div>
    );
};

export default LandingPageButtons;