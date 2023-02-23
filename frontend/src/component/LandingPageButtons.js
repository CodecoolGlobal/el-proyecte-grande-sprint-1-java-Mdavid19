import React from 'react';
import {Link} from "react-router-dom";


const LandingPageButtons = () => {

    const style = {
        animationDelay: '0.07s'
    }

    return (
        <div className={'center'}>
            <Link className={['landing-butt',"landing-butt-white", "landing-butt-animate"].join(" ")} to='/login'>Login</Link>
            <Link className={['landing-butt',"landing-butt-white", "landing-butt-animate"].join(" ")} to='/registration'>Register</Link>
        </div>
    );
};

export default LandingPageButtons;