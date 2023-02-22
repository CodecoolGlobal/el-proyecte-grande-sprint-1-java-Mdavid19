import React from 'react';

const TextField = ({className, name}) => {
    return (
        <div className={className}>
            <p className={'user-name'}>{name}</p>
        </div>
    );
};

export default TextField;
