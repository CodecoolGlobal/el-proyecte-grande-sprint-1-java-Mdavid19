import React from 'react';


const LandingPageButtons = ({linkOne,linkTwo}) => {

    const style = {
        animationDelay: '0.07s'
    }

    return (
        <div className={'center'}>
            <a href={linkOne}><button className={['center', 'landing-butt', 'bouncy'].join(" ")}>Login</button></a>
            <a href={linkTwo}><button className={['center', 'landing-butt', 'bouncy'].join(" ")} style={style}>Register</button></a>
        </div>
    );
};

LandingPageButtons.defaultProps = {
    linkOne: "",
    linkTwo: ""
}

export default LandingPageButtons;